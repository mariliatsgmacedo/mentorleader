import { ContainerModal, Content, Header, List } from "./styles"
import ImgPhoto from "../../assets/no-photo.svg";
import IconLinkedin from '../../assets/icon-linkedin.svg';
import IconGithub from '../../assets/icon-github.svg';
import Modal from 'react-modal';
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { collection, DocumentData, onSnapshot } from "firebase/firestore";
import { Tables } from "../../enums";
import { db } from "../../config/firebase-config";

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export const ModalMentor = ({ isOpen, onRequestClose }: ModalProps) => {
    const [list, setList] = useState<DocumentData[]>([])

    useEffect(
        () => onSnapshot(collection(db, Tables.USERS), (snap) => {
            setList(snap.docs.map((doc) => ({ ...doc.data(), iddoc: doc.id })))
        }), [])

    return <>
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-override-modal"
            className="react-modal-content"
        >
            <ContainerModal>
                <Content>
                    {
                        list.map((item) => (
                            <Header key={item.iddoc}>
                                <img className="profile" src={item?.photo ? item?.photo : ImgPhoto} alt="Foto de usuario default" />
                                <div className="mentor-info">
                                    <h3>{item?.name}</h3>
                                    <p>{item?.occupation}</p>
                                    <p>{item?.email}</p>
                                    <div className="is-enable">
                                        <div className="point"></div>
                                        <p className="enable">Estou disponível</p>
                                    </div>
                                </div>
                                <div className="mentor-links">
                                    <a href="www.linkedin.com">
                                        <img src={IconLinkedin} alt="" />
                                    </a>
                                    <a href="www.github.com">
                                        <img src={IconGithub} alt="" />
                                    </a>
                                </div>
                            </Header>
                        ))
                    }
                    <Divider />
                    <List>
                        <li>Java</li>
                        <li>React</li>
                        <li>Typescript</li>
                        <li>Javascript</li>
                    </List>
                    <Divider />
                </Content>
                <div className="container-buttons">
                    <div className="btn-div-close">
                        <button className="btn-close" type="button" onClick={onRequestClose}>Fechar</button>
                    </div>
                    <div className="message-to-mentor">
                        <button className="btn-message" type="button" >Olá, tenho interesse em ser seu mentorado.</button>
                    </div>
                </div>
            </ContainerModal>
        </Modal>
    </>
}