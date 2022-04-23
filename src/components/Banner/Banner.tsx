import { ContainerBanner } from "./styles";
import BannerHome from '../../assets/banner-home.svg';

export const Banner = () => {
    const describe = "Já pensou em ajudar alguém que está começando a aprender a programar? Ou em ajudar outra pessoa a desenvolver melhor skills que você já desenvolveu? Então, essa é uma daquelas oportunidades. Estamos aqui para desenvolver a cultura de compartilhamento de conhecimento. Se você procura desenvolver alguma skill basta procurar um dos nossos mentores. Lembrando que quem faz a mentoria são vocês, os mentores são guias, ok?"
    return <>
        <ContainerBanner>
            <img src={BannerHome} alt="" />
            <p>{describe}</p>
        </ContainerBanner>
    </>
}