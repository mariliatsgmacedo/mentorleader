import { ContainerLoading } from "./loading/style"

export const Loading = () => {

    return <>
        <ContainerLoading>
            <h1>LOADING...</h1>
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        </ContainerLoading>
    </>
}