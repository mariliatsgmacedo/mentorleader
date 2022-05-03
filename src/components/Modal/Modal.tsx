import { ContainerModal, Content, Header, List } from "./styles"
import ImgPhoto from "../../assets/no-photo.svg";
import Modal from 'react-modal';

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export const ModalMentor = ({isOpen, onRequestClose}: ModalProps) => {

    return<>
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-override-modal"
        className="react-modal-content"
        >
        <ContainerModal>
            <Content>
                <Header>
                    <img src={ImgPhoto} alt="Foto de usuario default" />
                    <div>
                        <h3>Jeferson Macedo</h3>
                        <p>Analista de desenvolvimento Sênior</p>
                        <p>jeferson@jeferson.com</p>
                    </div>
                </Header>

            <hr />
            <h3>Hard Skills</h3>
            <List>
                <li>Java</li>
                <li>React</li>
                <li>Typescript</li>
                <li>Javascript</li>
            </List>
            <h3>Soft Skills</h3>
            <List>
                <li>lista de softskill</li>
            </List>
            <hr />
            </Content>
            <div>
                <button type="button" onClick={onRequestClose}>Fechar</button>
            </div>
        </ContainerModal>
    </Modal>
    </>
}