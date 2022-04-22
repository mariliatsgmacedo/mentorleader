import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
 
 const auth = getAuth();
 const navigate = useNavigate();
 const [authorize, setAuthorize] = useState(false);

 const signInWithGoogle = async () => {
     setAuthorize(true);

     signInWithPopup(auth, new GoogleAuthProvider())
        .then((res) => {
            console.log(res.user.uid);
            navigate('/')
        })
        .catch((err) => {
            console.log(err);
            setAuthorize(false);
        })
 }

    return (
        <button onClick={() => signInWithGoogle()} disabled={authorize}>Sign in with google</button>
    )
}