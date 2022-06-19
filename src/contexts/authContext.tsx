import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { auth } from "../config/firebase-config";
import { Local } from "../enums";
import { IReadUserDto, IUser } from "../model/model";
import { createUser, getUserAuth, getUserInfo } from "../services/firebase/firebase";

interface AuthContextProps {
    authenticate: boolean;
    user: IReadUserDto | undefined;
    initialLoading: boolean;
    signInWithGoogle: () => Promise<void>;
    logoutGoogle: () => void;
    loadUserInfo: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<IReadUserDto>();
    const [initialLoading, setInitialLoading] = useState(true);

    const init = async () => {
        await loadUserInfo()
        setInitialLoading(false);
        console.log('Auth provider carregando...');
    }

    useEffect(() => {
        //Delay para esperar firebase carregar
        setTimeout( ()=> init(), 800);
    }, [])

    async function loadUserInfo(): Promise<Boolean>{
        let userAuth = await getUserAuth()
        if (userAuth) {
            let userInfo = await getUserInfo(userAuth.uid)
            if(userInfo){
                setUser(userInfo)
                return true
            }
        } 

        return false;
    }

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(userLogged => {
    //         if(userLogged) {
    //             const { displayName, email, photoURL, uid } = userLogged
    //             if (!displayName || !photoURL) {
    //                 throw new Error('Missing information from Google Account')
    //             }
    //             setInitialLoading(false);
    //             const user = {
    //                 name: displayName,
    //                 email: email,
    //                 id: uid,
    //                 photo: photoURL,
    //             } as IUser
    //             setUser(user)
    //             createUser(db, "users", user)
    //         }
    //     })
    //     return () => {
    //         unsubscribe()
    //     }
    // },[])

    const signInWithGoogle = async () => {
        setInitialLoading(true)
        const provider = new GoogleAuthProvider();
        const response = await signInWithPopup(auth, provider);
        const { displayName, email, photoURL, uid } = response.user
        
        var user = {
            name: displayName,
            email,
            uid,
            photo: photoURL,
        } as unknown as IUser
        
        let _user = await createUser(user)
        setUser(_user);
        setInitialLoading(false)

    }
    const logoutGoogle = () => {
        setUser(undefined)
        localStorage.clear()
        return signOut(auth);
    }

    const value = useMemo(() => ({
        signInWithGoogle,
        logoutGoogle,
        authenticate: !!user,
        user,
        initialLoading,
        loadUserInfo,
    }), [user, initialLoading])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}

// export const useAuth = () => useContext(AuthContext)