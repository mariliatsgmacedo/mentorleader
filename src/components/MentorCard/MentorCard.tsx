import { Cards, ContainerMentorCard, Title } from "./styles"
import ImgPhoto from "../../assets/no-photo.svg";
import { useEffect, useState } from "react";
import { getMentors } from "../../services/firebase/firebase";
import { DocumentData } from "firebase/firestore";

interface MentorCardProps {
    onMentorModalIsOpen: () => void;
}

export const MentorCard = ({onMentorModalIsOpen}:MentorCardProps) => {

    const [list, setList] = useState<DocumentData[]>([]);

    useEffect(() => {
        getMentors().then((data) => setList(data))
    }, [])


    return <>
        <Title>
            Mentores disponíveis
        </Title>
        <ContainerMentorCard>
            {list?.map((item:any) => (
                <Cards>
                    <img src={ImgPhoto} alt="Imagem do mentor" />
                    <h4>{item.name}</h4>
                    <p>{item.hardskill}</p>
                    <button type="button" onClick={onMentorModalIsOpen}>Ver mais</button>
                </Cards>
            ))}
        </ContainerMentorCard>
    </>
}