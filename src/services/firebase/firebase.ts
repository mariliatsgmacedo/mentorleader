import { collection, DocumentData, getDocs } from 'firebase/firestore';
import { db } from '../../config/config';
import { Auth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// export const app = initializeApp(config.firebase);
// export const db = getFirestore(app);


// export const googleAuthenticate = (setAuthorize: (arg0: boolean) => void, auth: Auth, navigate: (arg0: string) => void) => {
//     return async () => {
//         setAuthorize(true);

//         signInWithPopup(auth, new GoogleAuthProvider())
//             .then((res) => {
//                 console.log(res.user.uid);
//                 const credential = GoogleAuthProvider.credentialFromResult(res);
//                 const token = credential?.accessToken;
//                 const user = res.user
//                 console.log(token);
//                 console.log(user);
//                 navigate('/');
//             })
//             .catch((err) => {
//                 console.log(err);
//                 setAuthorize(false);
//             });
//     };
// }

export const getMentors = async (): Promise<DocumentData[]> => {
    const mentors = await getDocs<DocumentData>(collection(db, "users"));
    return mentors.docs.map((doc) =>  doc.data() )
}
