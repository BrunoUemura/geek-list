import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;

  background-color: #121214;
  color: white;
`;

export const MainHeader = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  height: 12vh;
  width: 50%;

  background-color: #212124;
  color: white;

  border-radius: 10px;
`;

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
  height: 8vh;
  width: 50%;
`;
