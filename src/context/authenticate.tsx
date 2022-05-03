import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { parseUser } from "../utils/convertions";

export interface IUser {
    uid: string;
    idToken: string;
    displayName: string;
    email: string;
    photoURL: string;
}

interface UserData {
    user?: IUser;
    signed: boolean;
    signInGoogle: () => void;
}

interface AuthGoogleContextProps {
    children: ReactNode;
}
export const AuthContextApi = createContext<UserData>({} as UserData);

export const AuthGoogleProvider = ({ children }: AuthGoogleContextProps) => {
    const navigate = useNavigate()
    const auth = getAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        const sToken = localStorage.getItem("@AuthFirebase:token");
        const sUser = localStorage.getItem("@AuthFirebase:user");

        if (sToken && sUser) {
            const convertData = JSON.parse(sUser)
            setUser(convertData);
            navigate('/');
        }
        else {
            navigate('/login')
        }
    }, [navigate])

    const signInGoogle = useCallback(() => {
        signInWithPopup(auth, provider)
            .then((res) => {
                const credential = GoogleAuthProvider.credentialFromResult(res);
                const token = credential?.accessToken || '';
                const user = parseUser(res.user, token);

                setUser(user);

                localStorage.setItem("@AuthFirebase:token", token)
                localStorage.setItem("@AuthFirebase:user", JSON.stringify(user))
                navigate('/');

            })
            .catch((err) => {
                console.log(err);
            })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth, provider])

    const value = useMemo(() => (
        { signInGoogle, signed: !!user, user }
    ), [signInGoogle, user])

    return (
        <AuthContextApi.Provider value={value}>
            {children}
        </AuthContextApi.Provider>
    )
}

export const useAuthenticate = () => useContext(AuthContextApi)
