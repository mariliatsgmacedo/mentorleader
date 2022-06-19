import { Box, Grid, Stack, Typography } from "@mui/material"
import { transparentize } from 'polished';
import { Outlet } from "react-router-dom"
import { Banner } from "../components/banner-default/Banner"
import { Header } from "../components/header-menu/Header"
import { UserForm } from "../components/user-form/UserForm"


export const Profile = () => {
    const describeBanner = "Nesse momento você pode compartilhar conhecimento ou alimentar o seu, pois o conhecimento compartilhado é um beneficio geral."

    return <>
        <Header />
        <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            sx={{ maxWidth: '1100px', m: 'auto' }}>
            <Grid item xs={12} sm={8} md={6}>
                <UserForm />
            </Grid>
            <Grid item md={6} sx={{ p: '1.5rem', height: '100%', textAlign: 'center', borderRadius: '4px' }}>
                <Typography gutterBottom variant="h3">Formulário</Typography>
                <Typography gutterBottom>Aqui você vai por as suas skills atuais. E que se for o caso, você poderá mentorar. </Typography>
                <Typography gutterBottom>Se você decidiu ser um mentor das skills que colocou no sistema, é só marcar o checkbox "Eu quero ser mentor"</Typography>
                <Box sx={{ backgroundColor: '#F0F2F5', mt: '1rem' }}>
                    <Banner describe={describeBanner} />
                </Box>
            </Grid>

        </Grid>
        <Outlet />
    </>
}