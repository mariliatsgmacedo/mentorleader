import {getAuth, signOut} from 'firebase/auth';
import { CardBanner } from '../components/CardBanner/CardBanner';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

export const Home = () => {
    const auth = getAuth();

    return <>
        <Header/>
        <CardBanner/>
        <button onClick={() => signOut(auth)}>Deslogar</button>
        <Footer/>
    </>
    
}