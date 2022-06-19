import { Cards, ContainerMentorCard, Title } from "./styles"
import ImgPhoto from "../../assets/no-photo.svg";
import EmptyImg from "../../assets/empty.svg";
import { useEffect, useState } from "react";
import { collection, DocumentData, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase-config";
import { Tables } from "../../enums";
import { IReadUserDto, IUser } from "../../model/model";
import { getAllMentors } from "../../services/firebase/firebase";
import { MentorCard } from "./MentorCard";
import { ModalMentor } from "../modal-schema/Modal";

interface MentorListCardProp {
    onMentorModalIsOpen?: () => void;
}
export const MentorListCard = ({ onMentorModalIsOpen }: MentorListCardProp) => {
    const [list, setList] = useState<IUser[]>([]);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState<IReadUserDto>()

    function handleModalOpen() {
        setOpen(true);
    }
    function handleModalClose() {
        setOpen(false);
    }


    useEffect(
        () => {
            getAllMentors().then((mentors) => {
                setList(mentors)
            }).catch((error) => {
                //TODO FAZER ALGUMA PARADA PRO ERRO\
                console.log(error)
            })
        }, [])

    const mentorHandleClick = (user: IReadUserDto) => {
        setModalInfo(user)
        handleModalOpen()
    }

    return <>
        {/* <Title>
            Mentores disponíveis
        </Title> */}
        <ContainerMentorCard>
            {list?.length > 0 ? (
                list?.map((item) => (
                    <MentorCard key={`card-${item.docRef}`} user={item} onClick={mentorHandleClick} />
                ))
            ) : (
                <div>
                    <img src={EmptyImg} alt="Imagem" />
                    <p>
                        Ops! Está um pouco vazio por aqui!
                    </p>
                </div>
            )}
        </ContainerMentorCard>
        {!modalInfo || <ModalMentor isOpen={open} onRequestClose={handleModalClose} user={modalInfo} />}
    </>
}