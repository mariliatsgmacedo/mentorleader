import { ContainerModal, Content, Header, List } from "./styles"
import ImgPhoto from "../../assets/no-photo.svg";
import IconLinkedin from '../../assets/icon-linkedin.svg';
import IconGithub from '../../assets/icon-github.svg';
import Modal from 'react-modal';
import { Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { collection, DocumentData, onSnapshot } from "firebase/firestore";
import { Tables } from "../../enums";
import { db } from "../../config/firebase-config";
import { IReadUserDto } from "../../model/model";
import { capitalize } from "../../utils/text-utils";

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    user: IReadUserDto;
}
export const ModalMentor = ({ isOpen, onRequestClose, user }: ModalProps) => {

    return <>
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-override-modal"
            className="react-modal-content"
        >
            <ContainerModal>
                <Content>
                    <Header key={user.docRef}>
                        <img className="profile" src={user?.photo ? user?.photo : ImgPhoto} alt="Foto de usuario default" />
                        <div className="mentor-info">
                            <h3>{user?.name}</h3>
                            <p>{user?.occupation}</p>
                            <p>{user?.email}</p>
                            <Stack direction="row" className="mentor-links" spacing={1}>
                                {!user.linkedinURI || <a href={user.linkedinURI} target="_blank" rel="noreferrer">
                                    <img src={IconLinkedin} alt="linkedin icon" />
                                </a>}

                                {!user.githubURI || <a href={user.githubURI} target="_blank" rel="noreferrer">
                                    <img src={IconGithub} alt="github icon"/>
                                </a>}
                            </Stack>

                            <div className="is-enable">
                                <div className="point"></div>
                                <p className="enable">Estou disponível</p>
                            </div>
                        </div>

                    </Header>
                    <Divider />
                    <List>
                        {
                            user.skills.map(item => (
                                <li key={item.docRef}>{capitalize(item.name)}</li>
                            ))
                        }
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