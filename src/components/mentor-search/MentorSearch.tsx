import { useEffect, useState } from 'react';
import { getAllMentors } from '../../services/firebase/firebase';
import EmptyImg from "../../assets/empty.svg";
import { MentorCard } from '../mentor-card/MentorCard';
import { IReadUserDto, IUser } from '../../model/model';
import { ModalMentor } from '../modal-schema/Modal';
import { Box } from '@mui/material';
import { transparentize } from "polished";

interface MentorSearchProps {
    query: string;
}

export const MentorSearch = ({ query }: MentorSearchProps) => {
    const [list, setList] = useState<IUser[]>([]);
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
            getAllMentors({
                query,
                limit: -1
            }).then((mentors) => {
                setList(mentors)
            }).catch((error) => {
                //TODO FAZER ALGUMA PARADA PRO ERRO\
                console.log(error)
            })
        }, [query])

    const mentorHandleClick = (user: IReadUserDto) => {
        setModalInfo(user)
        handleModalOpen()
    }

    return <Box sx={{
        backgroundColor: `${transparentize(0.9, '#C4C4C4')}`,
        minHeight: '100vh'
    }}>
        <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            gap={1}
            sx={{
                p: '2rem'
            }}
        >

            {list?.length > 0 ? (
                list?.map((item) => (

                    <MentorCard key={`card-${item.docRef}`} user={item} onClick={mentorHandleClick} />

                ))
            ) : (
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <img src={EmptyImg} alt="Imagem" width={400}/>
                    <p>
                        Ops! Está um pouco vazio por aqui!
                    </p>
                </div>
            )}
            {!modalInfo || <ModalMentor isOpen={open} onRequestClose={handleModalClose} user={modalInfo} />}
        </Box>
    </Box>
}