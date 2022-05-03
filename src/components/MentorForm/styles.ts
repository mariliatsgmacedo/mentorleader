import styled from "styled-components";

export const Container = styled.section`
    max-width: 1100px;
    margin: auto;
    padding: 1rem;
    text-align: center;
    border-radius: 0.25rem;
`;
export const ContentMentorForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input ,  textarea{
        width: 50%;
        border-radius: 0.25rem;
        border: 1px solid #C0C0C0;
        padding: 1rem 0.5rem 1rem 0.5rem ;
        margin-top: 1rem;
        color: var(--light-font-dark);
        font-size: 1rem;
    }

    button{
        width: 50%;
        margin-top: 1rem;
        padding: 1rem;
        color: var(--primary-color);
        font-size: 1.3rem;
        font-weight: 500;
        background: transparent;
        border: 1px solid #821284;
        border-radius: 0.25rem;
    }

    @media (max-width: 1100px) {
        input ,  textarea{
            width: 100%;
        }
        button{
            width: 100%;
        }
    }



`;
