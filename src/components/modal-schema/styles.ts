import { transparentize } from "polished";
import styled from "styled-components";

export const ContainerModal = styled.main`
    background: var(--background-modal);
    border-radius: 4px;
    padding: 1rem;

    .container-buttons{
        display: flex;
        justify-content: space-evenly;
    }

    .message-to-mentor,
    .btn-div-close{
        color: var(--primary-color);
        padding-top: 1rem;
        text-align: center;
    }

    .btn-message{
        padding: 0.5rem;
        background: transparent;
        border: 1px solid ${transparentize(0.8, '#821284')};
        border-radius: 4px;
        color: var(--primary-color);
        font-weight: 600;
        font-size: 1rem;
        transition: 0.3s;
        &:hover{
            background-color: ${transparentize(0.8, '#821284')};
        }
    }
    .btn-close{
        background: ${transparentize(0.9, '#821284')};
        padding: 0.5rem 5rem;
        border: none;
        border-radius: 4px;
        font-weight: 600;
        font-size: 1rem;
        color: var(--primary-color);
        transition: 0.3s;
        &:hover{
            background-color: ${transparentize(0.8, '#821284')};
            color: var(--primary-color);
        }
    }  
`;

export const Content = styled.section`
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        }
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto 2fr 1fr;
    justify-items: center;
    align-items: center;
    padding-bottom: 1rem;
    letter-spacing: 1px;

    .profile{
        width: 12rem;
        text-align: center;
    }
    .mentor-info {
        line-height: 2rem;
    }
    .enable {
        /* background: green; */
        border-radius: 12px;
        text-align: start;
        color: green;
        font-weight: bolder;
    }
    .point {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: green;
        margin-right: 0.5rem;
    }

    .is-enable{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    @media (max-width: 600px) {
       display: flex;
       flex-direction: column;
       flex-wrap: wrap;
       text-align: center;
       justify-content: center;
       
       .profile{
        width: 7rem;
        }

       .mentor-links{
           img{
               width: 30px;
           }
       }
       .enable{
          margin: 0.5rem;
       }
    }
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: 1rem;
    margin-bottom:1rem ;

    li {
      padding: 0.5rem 1rem;
      list-style: none;
      border: 1px solid var(--primary-color);
      border-radius:1.3rem;
      color: var(--primary-color);
      margin-right: 0.5rem;
      font-weight: bolder;

    }

    @media (max-width: 600px) {
       display: flex;
       flex-wrap: wrap;
       gap: 0.5rem;
       margin-left: 0.5rem;

    }
`;



