import { ContainerBanner } from "./styles";
import BannerHome from '../../assets/banner-home.svg';

interface BannerProps{
    describe: string;
}
export const Banner = ({describe}:BannerProps) => {
     return <>
        <ContainerBanner>
            <img src={BannerHome} alt="" />
            <p>{describe}</p>
        </ContainerBanner>
    </>
}