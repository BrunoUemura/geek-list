import React, { useEffect, useState } from 'react';

import { MainContainer, MainHeader, MainBody } from './styles';

const Home = () => {
  return (
    <MainContainer>
      <MainHeader>
        <h1>Geek List</h1>
      </MainHeader>
      <MainBody>
        <h1>Home page</h1>
      </MainBody>
    </MainContainer>
  );
};

export default Home;
