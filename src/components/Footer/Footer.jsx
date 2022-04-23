import { ContainerFooter, Content } from "./styles"
import IconLinkedin from '../../assets/icon-linkedin.svg';
import IconInstagram from '../../assets/icon-instagram.svg';
import IconGithub from '../../assets/icon-github.svg';

export const Footer = () => {

    return <>
        <ContainerFooter>
            <Content>
                <a href="#"> Terms of Service</a>
                <div>
                    <ul>
                        <li>
                            <a href="#">
                                <img src={IconLinkedin} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={IconInstagram} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={IconGithub} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <p>Developer by Mari Macedo  - Ventureira <span>&hearts;</span></p>
            </Content>
        </ContainerFooter>
    </>
}