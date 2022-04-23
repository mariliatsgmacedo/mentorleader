import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { Container, Form, Landing } from './style';
import IconLock from '../../assets/icon-lock.svg';
import LoginImage from '../../assets/login-image.svg';

interface IFormInput {
    email: string;
    password: string;
}

export const LoginForm = () => {

    const auth = getAuth();
    const navigate = useNavigate();
    const [authorize, setAuthorize] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    const signInWithGoogle = async () => {
        setAuthorize(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then((res) => {
                console.log(res.user.uid);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                setAuthorize(false);
            })
    }

    return <>
        <Container>
            <Landing>
                <img src={LoginImage} alt="Imagem de login" />
                <h3>Mentores On</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facilis magnam natus accusantium, obcaecati atque impedit autem, cumque est molestias tempore asperiores unde totam delectus itaque harum consequuntur vero eos.</p>
            </Landing>
            <Form>
                <img src={IconLock} alt="Icone de cadeado" />
                <p>Entre com as suas credenciais para acessar a sua conta</p>
                <input type="email" {...register("email", { required: true })} placeholder="Email" />
                <div>
                    {errors.email && "O campo Email é obrigatório"}
                </div>
                <br />
                <input type="password" {...register("password", { required: true })} placeholder="Senha" />
                <div>
                    {errors.password && "O campo Password é obrigatório"}
                </div>
                <br />
                <button type='submit' onClick={() => signInWithGoogle()} disabled={authorize}>Sign in with google</button>
                <button className='buttonEnter' type='submit' onClick={handleSubmit(onSubmit)}>Sign in</button>
            </Form>

        </Container>
    </>

}