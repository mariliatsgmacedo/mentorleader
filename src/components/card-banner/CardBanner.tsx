import IconRoboCardRule from '../../assets/icon-robo.svg'
import IconLupaCardRule from '../../assets/icon-lupa.svg';
import IconOkCardRule from '../../assets/icon-ok.svg';
import { ContainerCardBanner, Cards } from './styles';

export const CardBanner = () => {

    return <>
        <ContainerCardBanner>
            <Cards>
                <img src={IconRoboCardRule} alt="Imagem de Robô" />
                <p>Juntamos a fome com a vontade de comer. Ou melhor, o desejo de ensinar com a vontade de aprender.</p>
            </Cards>
            <Cards>
                <img src={IconLupaCardRule} alt="Imagem de Lupa" />
                <p>Qualquer ventureiro ou ventureira, pode ser um mentor. Só precisa ter vontade de compartilhar conhecimento.</p>
            </Cards>
            <Cards>
                <img src={IconOkCardRule} alt="Imagem de Ok" />
                <p>Nossa mentoria é uma ponte entre mentor e mentorado, para desenvolver tanto as habilidades técnicas quanto comportamentais.</p>
            </Cards>
        </ContainerCardBanner>
    </>
}