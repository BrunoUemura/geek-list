import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  background-color: #121214;
  color: white;
`;

export const RegisterLogo = styled.div`
  img {
    width: 300px;
    height: 300px;
  }
`;

export const RegisterForm = styled.div`
  background-color: #29292e;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  padding: 20px;
  width: 500px;
  height: 500px;

  h1 {
    font-family: 'Roboto Slab';
    font-size: 40px;
    margin-bottom: 20px;
  }

  h4 {
    font-family: 'Roboto Slab';
    font-weight: 300;
    margin-top: 40px;
    font-size: 15px;
    font-weight: 500;
    color: #e1e1e6;
  }

  .register-input-name,
  .register-input-email,
  .register-input-password {
    display: flex;
    align-items: center;
    color: grey;
    background-color: #1a1a1d;
    padding: 3px;
    width: 98%;
    height: 50px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .register-input-name svg,
  .register-input-email svg,
  .register-input-password svg {
    margin-left: 10px;
    font-size: larger;
  }

  .register-input-name input,
  .register-input-email input,
  .register-input-password input {
    background: transparent;
    width: 100%;
    outline-width: 0;
    color: #e1e1e6;
    border: none;
    font-size: 17px;
    margin-left: 10px;
    margin-right: 10px;
  }

  button {
    width: 98%;
    background-color: #202024;
    color: #eff2f5;
    font-weight: 800;
    height: 50px;
    border-radius: 5px;
    font-size: 18px;
    margin-top: 5px;
    border: none;

    outline-width: 0;

    &:hover {
      background-color: #121214;
      color: #eff2f5;
      cursor: pointer;
    }
  }

  .register-input-password-eye {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30;
    cursor: pointer;
    margin-right: 20px;
  }
`;
