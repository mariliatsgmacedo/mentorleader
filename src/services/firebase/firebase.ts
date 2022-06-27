import { User } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, DocumentData, endAt, getDoc, getDocs, limit, orderBy, query, startAt, Timestamp, updateDoc, where } from 'firebase/firestore';
import { auth, db } from '../../config/firebase-config';
import { Tables } from '../../enums';
import { CreateSkillDto, IReadUserDto, ISkill, IUpdateUserDto, IUser, IUserSkill } from '../../model/model';
import { Pagination } from './index.interface';

export const createUser = async (user: IUser): Promise<IReadUserDto> => {
    let userInfo = await getUserInfo(user.uid)
    if (!userInfo) {
        console.log('Passou aqui e viu que precisava criar');
        try {
            let newUser = {
                uid: user.uid,
                name: user.name,
                photo: user.photo,
                email: user.email,
                isMentor: false,
                createdAt: Timestamp.now(),
            }
            let ref = await addDoc(collection(db, Tables.USERS), newUser)
            return { ...newUser, docRef: ref.id, skills: [] } as unknown as IReadUserDto
        } catch (err) {
            throw new Error("Erro ao tentar salvar")
        }
    }

    console.log('Passou aqui e viu que não precisava criar');
    return userInfo;
}
async function addSkillsToUser(userId: string, skills: ISkill[]): Promise<ISkill[]> {
    //INSERT INTO UserSkills (userID, skillID) VALUES (:userId, skills[i].docRef)
    try {
        var mapISkills = skills.map(async (item) => {
            let s = await addDoc(collection(db, Tables.USER_SKILLS), {
                userId,
                skillId: item.docRef
            })
            return { ...item, docRef: s.id } as ISkill
        })
        return await Promise.all(mapISkills);
    } catch (error) {
        throw new Error("Deu ruim mano" + error);
    }
    // return true;
}
async function addSkills(skills: CreateSkillDto[]): Promise<ISkill[]> {
    // INSERT INTO Skill (name) VALUES (skills[i].name)
    try {
        var dbSkills = skills.map(async (item) => {
            let docRef = await addDoc(collection(db, Tables.SKILLS), { name: item.name.toUpperCase() } as CreateSkillDto)
            return { ...item, docRef: docRef.id } as ISkill;
        })
        var list = await Promise.all(dbSkills)
        return list
    } catch (error) {
        throw new Error("Deu ruim de novo mano" + error);
    }
    //Return skills with ids filled 
}
async function updateUserFirebase(docRef: string, user: IUpdateUserDto) {
    try {
        const myRef = doc(db, Tables.USERS, docRef)
        await updateDoc(myRef, { ...user })
    } catch (error) {
        throw error;
    }
}
export const updateUser = async (user: IUser, skills: ISkill[]): Promise<boolean> => {
    //TODO FUTURAMENTE EM BREVE ADICIONAR RETORNO DE STATUS DA AÇÃO. INFORMANDO O USUARIO O QUE HAPPEND
    //PARA APROVEITAR LOGICA PRA QUANDO MIGRAR PARA O BACKEND

    try {
        //ATUALIZAR USUARIO NO FIREBASE
        await updateUserFirebase(user.docRef, {
            name: user.name,
            occupation: user.occupation,
            linkedinURI: user.linkedinURI || '',
            githubURI: user.githubURI || '',
            isMentor: user.isMentor,
            photo: user.photo
        } as IUpdateUserDto)
        //BUSCAR SKILLS CADASTRADAS DO USUARIO [TABLE USER SKILLS]
        let resultSkills = await getUserSkills(user.docRef)
        //SEPARAR SKILLS A SER CRIADAS [TABLE SKILLS], TB SERA USADA PARA VINCULAR AO USER [TABLE USER SKILLS]
        var newSkills = skills.filter(item => !item.docRef)
        newSkills = await addSkills(newSkills)
        //SEPARAR SKILLS PARA CRIAR VINCULOS [TABLE USER SKILLS]
        let resultSkillIds = (resultSkills || []).map(item => item.skillId)
        let addSkillsUser = skills.filter(item => !!item.docRef).filter(item => resultSkillIds.indexOf(item.docRef) === -1)
        await addSkillsToUser(user.docRef, [...newSkills, ...addSkillsUser])
        //SEPARAR SKILLS PARA REMOVER VINCULOS [TABLE USER SKILLS]
        let ids = skills.filter(item => !!item.docRef).map(item => item.docRef);
        let skillsToRemove = resultSkills.filter(userSkill => ids.indexOf(userSkill.skillId) === -1)
        await removeUserSkills(skillsToRemove);
        return true
    } catch (error) {
        // throw new Error("Colocar msg de erro na atualização do usuário");
        return false;
    }
}
async function removeUserSkills(list: IUserSkill[]): Promise<boolean> {
    try {
        let arrDocRef = list.map(async (item) => {
            return await deleteDoc(doc(db, Tables.USER_SKILLS, item.docRef))
        })
        await Promise.all(arrDocRef)
        return true
    } catch (error) {
        return false
    }
}
export const getUsers = async (): Promise<any> => {
    const mentors = await getDocs<DocumentData>(collection(db, Tables.USERS));
    return mentors.docs.map((doc) => doc.data())
}
export const getMentorId = async (id: string): Promise<any> => {
    const docRef = doc(db, Tables.USERS, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) { return docSnap.data() }
}
async function getUserSkills(userId: string): Promise<IUserSkill[]> {
    //SELECT * FRON UserSkills WHERE userID = :userID
    const qry = query(collection(db, Tables.USER_SKILLS), where("userId", "==", userId))
    const docs = await getDocs(qry)
    return docs.docs.map(item => ({ ...item.data(), docRef: item.id } as IUserSkill));
    // return []
}
export const getAllMentors = async ({ start, limit: limitPage = 10, query: textQuery }: Pagination = {}): Promise<IUser[]> => {
    var constraints = [
        where("isMentor", "==", true),
        orderBy("name"),
    ]

    if(limitPage !== -1){
        constraints.push(
            limit(limitPage)
        )
    }

    if(!!textQuery){
        constraints.push(
            startAt(textQuery), 
            endAt(`${textQuery}\uf8ff`)
        )
    }

    if (start) {
        constraints.push(
            startAt(start)
        )
    }

    const ment = query(collection(db, Tables.USERS), ...constraints)
    const querSnap = await getDocs(ment)
    return querSnap.docs.map((doc) => ({ ...doc.data(), docRef: doc.id } as IUser))
}

/**
 * Get Firebase Authenticated user
 * @return Promise< User | null>
 */
export const getUserAuth = async (): Promise<User | null> => {
    return auth.currentUser
}

/**
 * 
 * @param uid id reference ao login externo
 * @returns Promise<IReadUserDto | null >
 */
export const getUserInfo = async (uid: string): Promise<IReadUserDto | null> => {
    //SELECT * FROM User Where userID = :userID
    const q = query(collection(db, Tables.USERS), where("uid", "==", uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
        return null;
    }

    let ref = docs.docs[0];
    let mUser = ref.data();
    var user = { ...mUser, docRef: ref.id } as unknown as IUser
    var skills: ISkill[] = await getSkills(user.docRef)

    return { ...user, skills } as IReadUserDto
}

/**
SELECT * FROM ISkills s
JOIN UserSkills us on us.skillID = s.skillID
WHERE userID : userID
*/
export const getSkills = async (userDocRef: string): Promise<ISkill[]> => {
    var skills: ISkill[] = []
    let userSkills = await getUserSkills(userDocRef);
    if (userSkills.length !== 0) {
        let skillsReq = userSkills.map(async (elem) => {
            let skill = await getDoc(doc(db, Tables.SKILLS, elem.skillId))
            return { ...skill.data(), docRef: skill.id } as ISkill
        })

        let skillRes = await Promise.all(skillsReq)
        if (skillRes.length !== 0) {
            skills = skillRes
        }
    }
    return skills

}

export const getSkillsFilteredByName = async (name: string, resultLimit: number = 6): Promise<ISkill[]> => {
    let nameUpper = name.toUpperCase()
    const q = query(collection(db, Tables.SKILLS), orderBy("name"), startAt(nameUpper), endAt(`${nameUpper}\uf8ff`), limit(resultLimit));
    const docs = await getDocs(q);
    return docs.docs.map(item => ({ ...item.data(), docRef: item.id } as ISkill))
}