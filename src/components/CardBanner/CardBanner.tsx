import IconRoboCardRule from '../../assets/icon-robo.svg'
import IconLupaCardRule from '../../assets/icon-lupa.svg';
import IconOkCardRule from '../../assets/icon-ok.svg';
import { ContainerCardBanner, Cards } from './styles';

export const CardBanner = () => {

    return <>
        <ContainerCardBanner>
            <Cards>
                <img src={IconRoboCardRule} alt="Imagem de Robô" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, sequi at nam vitae illo, odit unde repellat.</p>
            </Cards>
            <Cards>
                <img src={IconLupaCardRule} alt="Imagem de Lupa" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, sequi at nam vitae illo, odit unde repellat.</p>
            </Cards>
            <Cards>
                <img src={IconOkCardRule} alt="Imagem de Ok" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, sequi at nam vitae illo, odit unde repellat.</p>
            </Cards>
        </ContainerCardBanner>
    </>
}