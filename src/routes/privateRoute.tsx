import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

interface PrivateRouteProps {
    children: ReactNode;
};
export const PrivateRoute = ({children}: PrivateRouteProps) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AuthCheck();
        return () => AuthCheck();
    }, [auth]);

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if(user) {
            setLoading(false)
        } else {
            console.log('unauthorized');
            navigate('/login')
        }
    });

    if (loading) return <p>Loaging...</p>
    
    return<>
        {children}
    </>
}