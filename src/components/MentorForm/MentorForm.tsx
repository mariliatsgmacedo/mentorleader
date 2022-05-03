
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { FormEvent, useState } from "react"
import { db } from "../../config/config"
import { Container, ContentMentorForm } from "./styles"
// type MentorList = {
//     name: string,
//     email: string,
//     hardskill: string,
//     softskill: string,
// }
export const MentorForm = () => {

    // const [mentor, setMentor] = useState<MentorList[]>();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cargo, setCargo] = useState('')
    const [hardskill, setHardskill] = useState('')
    const [softskill, setSoftskill] = useState('')

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'users'), {
                name: name,
                email: email,
                cargo: cargo,
                hardskill: hardskill,
                softskill: softskill,
                createdAt: Timestamp.now()
            })
        } catch (err) {
            alert(err)

        }
    }

    return <>
    <Container>
        <h1>Formulario de Mentor</h1>
        <ContentMentorForm onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Nome" />
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email} placeholder="Email" />
            <input
                type="text"
                onChange={(e) => setCargo(e.target.value)}
                value={cargo} placeholder="Cargo" />
            <textarea
                onChange={(e) => setHardskill(e.target.value)}
                value={hardskill}
                placeholder="Digite aqui o que você pode mentorar [Hardskills]" />
            <textarea
                onChange={(e) => setSoftskill(e.target.value)}
                value={softskill}
                placeholder="Digite aqui o que você pode mentorar [Softskills]" />
            <button type="submit">Salvar</button>
        </ContentMentorForm>

    </Container>

    </>
}