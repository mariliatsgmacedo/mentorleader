import {getAuth, signOut} from 'firebase/auth';

export const Home = () => {
    const auth = getAuth();

    return <>
        <h1>Rota protegida!</h1>
        <button onClick={() => signOut(auth)}>Deslogar</button>
    </>
    
}