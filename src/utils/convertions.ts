import { UserCredential } from "firebase/auth";
import { IUser } from "../model/model";

export const parseUser = (user: UserCredential['user'], token: string) => {
    return {
        uid: user.uid,
        idToken: token,
        isMentor: Boolean,
        displayName: user.displayName,
        email: user.email,
        photo: user.photoURL,
    } as unknown  as IUser
}