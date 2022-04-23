import {getAuth, signOut} from 'firebase/auth';
import { Header } from '../components/Header/Header';

export const Home = () => {
    const auth = getAuth();

    return <>
        <Header/>
        <button onClick={() => signOut(auth)}>Deslogar</button>
    </>
    
}