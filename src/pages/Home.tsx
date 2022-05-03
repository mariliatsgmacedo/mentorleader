import { getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';
import { Banner } from '../components/Banner/Banner';
import { CardBanner } from '../components/CardBanner/CardBanner';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { MentorCard } from '../components/MentorCard/MentorCard';
import { ModalMentor } from '../components/Modal/Modal';

export const Home = () => {
    const auth = getAuth();
    const [open, setOpen] = useState(false);

    function handleModalOpen() {
        setOpen(true);
    }
    function handleModalClose() {
        setOpen(false);
    }

    return <>
        <Header />

        <Banner />
        <CardBanner />
        <MentorCard onMentorModalIsOpen={handleModalOpen} />
        <ModalMentor isOpen={open} onRequestClose={handleModalClose} />
        <button onClick={() => signOut(auth)}>Deslogar</button>
        <Footer />
    </>
}