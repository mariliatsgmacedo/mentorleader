import { UserCredential } from "firebase/auth";
import { IUser } from "../context/authenticate";

export const parseUser = (user: UserCredential['user'], token: string) => {
    return {
        uid: user.uid,
        idToken: token,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
    } as IUser
}