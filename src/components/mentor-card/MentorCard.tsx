import { Cards, ContainerMentorCard, Title } from "./styles"
import ImgPhoto from "../../assets/no-photo.svg";
import EmptyImg from "../../assets/empty.svg";
import { useCallback, useEffect, useState } from "react";
import { collection, DocumentData, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase-config";
import { Tables } from "../../enums";
import { IReadUserDto, ISkill, IUser } from "../../model/model";
import { getSkills } from "../../services/firebase/firebase";
import { capitalize } from "../../utils/text-utils";

interface MentorCardProps {
    user: IUser;
    onClick: (user: IReadUserDto) => void;
}
export const MentorCard = ({ user, onClick }: MentorCardProps) => {
    const [skills, setSkills] = useState<ISkill[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSkills(user.docRef).then((list) => {
            setSkills(list)
            setLoading(false)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const handleClick = () => {
        let readDto = {...user, skills: skills} as IReadUserDto
        onClick(readDto)
    }
    const displaySkills = useCallback(() => {
        if (loading) {
            return 'Carregando...'
        } else if (skills.length === 0) {
            return 'Sem skills por aqui. =/'
        } else {
            return skills.map(item => capitalize(item.name)).join(', ')
        }
    }, [loading, skills])

    return <>
        <Cards>
            <img src={user.photo ? user.photo : ImgPhoto} alt="Imagem do mentor" />
            <h4>{`${user.name.split(' ')[0]} ${user.name.split(' ').slice(-1).join(' ')}`}</h4>
            <p>{displaySkills()}</p>
            <button type="button" onClick={handleClick}> {'Ver mais'}</button>
        </Cards>

    </>
}