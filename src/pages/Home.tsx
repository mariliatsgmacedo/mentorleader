import { Banner } from '../components/banner-default/Banner';
import { CardBanner } from '../components/card-banner/CardBanner';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header-menu/Header';
import { MentorListCard } from '../components/mentor-card/MentorListCard';
import { ModalMentor } from '../components/modal-schema/Modal';
import { BannerFixed } from '../components/articles/BannerFixed';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserAuth, getUserInfo } from '../services/firebase/firebase';
import { Typography } from '@mui/material';


export const Home = () => {
    const [open, setOpen] = useState(false);
    const describeBanner = "Já pensou em ajudar alguém que está começando a aprender a programar? Ou em ajudar outra pessoa a desenvolver melhor skills que você já desenvolveu? Então, essa é uma daquelas oportunidades. Estamos aqui para desenvolver a cultura de compartilhamento de conhecimento. Se você procura desenvolver alguma skill basta procurar um dos nossos mentores. Lembrando que quem faz a mentoria são vocês, os mentores são guias, ok?"
   

    function handleModalOpen() {
        setOpen(true);
    }
    function handleModalClose() {
        setOpen(false);
    }

    return <>
        <Header />
        <Banner describe={describeBanner}/>
        <CardBanner />
        <Typography align='center' variant='h5'>Mentores Disponíveis</Typography>
        <MentorListCard onMentorModalIsOpen={handleModalOpen}  />
        <BannerFixed />
     
        <Footer />
        <Outlet />
    </>
}