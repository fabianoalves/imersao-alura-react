import React from 'react';
import styled from 'styled-components';

import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import dadosIniciais from './data/dados_iniciais.json';

const AppWrapper = styled.div`
  background: var(--grayDark);
  padding-top: 94px;
  @media(max-width: 800px){
    padding-top: 40px;
  }
`;

function App() {
  return (
    <AppWrapper> 
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é front end? Trabalhando na área os termos HTML, CSS e Javascript"}
      />
      {dadosIniciais.categorias.map((cat) => (
        <Carousel
          ignoreFirstVideo
          category={cat}
        />
      ))}  
     
      <Footer />


    </AppWrapper>
  );
}

export default App;
