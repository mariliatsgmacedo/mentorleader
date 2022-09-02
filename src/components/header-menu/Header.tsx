import { Link, useNavigate } from "react-router-dom"
import { Container, ContentHeader } from "./styles";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useAuth } from "../../hooks/useAuth";

export const Header = () => {
    const { logoutGoogle } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logoutGoogle()
        navigate('/login')
    }

    return <>
        <Container>
            <ContentHeader>
                <h1>
                    <Link to="/">
                        Mentores On
                    </Link>
                </h1>
                <div>
                    <nav>
                        <Link data-cy="listaMentoresbtn" to="/mentors">
                            Lista Mentores
                        </Link>
                        <Link data-cy="profilebtn" to="/profile">
                            Perfil
                        </Link>
                        <button data-cy="logoutbtn" type="button" onClick={handleLogout}>
                            <ExitToAppIcon />
                        </button>
                    </nav>
                </div>
            </ContentHeader>
        </Container>
    </>
}