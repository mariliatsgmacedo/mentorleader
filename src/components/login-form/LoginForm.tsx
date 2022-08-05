import { Container, ContentForm, Landing } from './style';
import IconLock from '../../assets/icon-lock.svg';
import LoginImage from '../../assets/login-image.svg';
import {ReactComponent as IconGoogle} from '../../assets/google.svg'
import { useAuth } from '../../hooks/useAuth';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';

const InputForm = Yup.object().shape({
    email: Yup.string().email('Ivalid Email').required('Required'),
    password: Yup.string().required('Required')
})

export const LoginForm = () => {
    const { signInWithGoogle } = useAuth();

    return <>
        <Container>
            <Landing>
                <img src={LoginImage} alt="Imagem de login" />
                <h3>Mentores On</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facilis magnam natus accusantium, obcaecati atque impedit autem, cumque est molestias tempore asperiores unde totam delectus itaque harum consequuntur vero eos.</p>
            </Landing>
            {/* <Forms>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={InputForm}
                    onSubmit={
                        values => console.log(values)
                    }>
                    {({ errors, touched }) => (
                        <Form>
                            <Field name="email" type="email" />
                            {errors.email && touched.email ? (<div> {errors.email}</div>) : null}
                            <Field name="password" />
                            {errors.password && touched.password ? (<div> {errors.password}</div>) : null}
                            <button type='submit'> Entrar </button>
                        </Form>
                    )}
                </Formik>
                <img src={IconLock} alt="Icone de cadeado" />
                <p>Entre com as suas credenciais para acessar a sua conta</p>
                <button type="button" onClick={signInWithGoogle} >Sign in with Google</button>
                <button className='btn-microsoft' type="button" onClick={() => alert()} >Sign in with Microsoft</button>
            </Forms> */}
            <ContentForm>

            <img src={IconLock} alt="Icone de cadeado" />
            <p>Entre com as suas credenciais para acessar a sua conta</p>
            <Button data-cy='signWithGoogleDataCy' variant='outlined' startIcon={<IconGoogle/>} onClick={signInWithGoogle}>Entrar com o Google</Button>
            {/* <button type="button" onClick={signInWithGoogle} >Sign in with Google</button> */}
            {/* <button className='btn-microsoft' type="button" onClick={() => alert()} >Sign in with Microsoft</button> */}
            </ContentForm>

        </Container>
    </>

}


