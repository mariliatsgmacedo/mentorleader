import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ReactNode, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContextApi } from "../context/authenticate";

interface PrivateRouteProps {
    children: ReactNode;
};
export const PrivateRoute = ({children}: PrivateRouteProps) => {
    const auth = getAuth();
    const navigate = useNavigate();

    const { signed } = useContext(AuthContextApi)

    useEffect(() => {
        if(signed){
            onAuthStateChanged(auth, (user) => {
                if(user) {
                   navigate('/') 
                } else {
                    navigate('/login')  
                }
            })
        }
    },[auth, navigate, signed])

    return<>
        {children}
    </>
}