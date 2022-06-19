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
                        <Link to="/mentors">
                            Lista Mentores
                        </Link>
                        <Link to="/profile">
                            Perfil
                        </Link>
                        <button type="button" onClick={handleLogout}>
                            <ExitToAppIcon />
                        </button>
                    </nav>
                </div>
            </ContentHeader>
        </Container>
    </>
}