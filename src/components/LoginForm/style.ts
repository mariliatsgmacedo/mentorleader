import styled from "styled-components";

export const Container = styled.main`
  /* background: green; */
  width: 100%;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const Landing = styled.section`
  width: 50%;
  height: 100vh;
  background: var(--primary-color);
  padding: 1rem;
  font-size: 0.7rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  img {
    width: 50%;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: var(--light-font-white);
  }

  p {
    max-width: 70%;
    line-height: 1.5rem;
    word-spacing: 5px;
    letter-spacing: 1.2px;
    font-size: 1rem;
    text-align: center;
    color: var(--light-font-white);
  }

  @media (max-width: 768px){
    visibility: hidden;
    width: 0;
    margin: 0;
    padding: 0;
  }
`;
export const Form = styled.form`
  /* background:yellow; */
  width: 50%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 6rem;
    height: 6rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.5rem;
    color: var(--light-font-dark);
    width: 50%;
    text-align: center;

    margin-bottom: 1rem;
  }

  input {
    width: 57%;
    padding: 0.7rem 0.4rem;
    border: 1px solid #C0C0C0;
    border-radius: 4px;
    font-size: 1rem;
  }

  button{
    width: 57%;
    border-radius: 4px;
    border: 1px solid red;
    background: transparent;
    padding: 0.8rem 0;
    font-size: 1rem;
    font-weight: 500;
    color: red;
    cursor: pointer;
    margin-bottom: .6rem;
  }

  .buttonEnter {
    border-radius: 4px;
    border: 1px solid #821284;
    color: var(--primary-color);
    cursor: pointer;
    background: transparent;
  }

  @media (max-width: 768px) {
    width: 100vh;
    height: 100vh;

    p{
      width: 90%;
      font-size: 1.5rem;
      text-align: center;
    }

    input {
    width: 90%;
    }

    button {
      width: 90%;
    }
  }

`;