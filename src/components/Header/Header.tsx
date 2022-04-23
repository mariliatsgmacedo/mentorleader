import { Link, useNavigate } from "react-router-dom"
import { Container, ContentHeader } from "./styles"

export const Header = () => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/new-mentor")
    }

    return <>
    <Container>
        <ContentHeader>
        <h1>
            <Link to="/home">
                Mentores On
            </Link>
        </h1>
        <button type="button" onClick={ handleNavigate }>
            Quero ser mentor
        </button>
        </ContentHeader>
    </Container>
    </>
}