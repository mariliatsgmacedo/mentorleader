import { useEffect } from "react"
import { LoginForm } from "../components/login-form/LoginForm"
import { getUserAuth } from "../services/firebase/firebase"

export const Login = () => {
    useEffect(()=>{
        (async ()=> {
            let userAuth = await getUserAuth()
            console.log(userAuth)
        })()
    })
    return (
        <LoginForm/>
    )
}