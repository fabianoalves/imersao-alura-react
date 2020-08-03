import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

// import dadosIniciais from '../../data/dados_iniciais.json';
import categoriasRepository from '../../repositories/categorias';

// const AppWrapper = styled.div`
//   background: var(--grayDark);
//   padding-top: 94px;
//   @media(max-width: 800px){
//     padding-top: 40px;
//   }
// `;

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll="0">

      { dadosIniciais.length === 0 && (<div>Loading...</div>)}

      { dadosIniciais.map((cat, indice) => {
        if (indice === 0) {
          return (
            <div key={cat.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O que é front end? Trabalhando na área os termos HTML, CSS e Javascript"
              />
              <Carousel
                ignoreFirstVideo
                category={cat}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={cat.id}
            category={cat}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
