import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import CadastroCategoria from './pages/cadastro/Categoria';
import CadastroVideo from './pages/cadastro/Video';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// function CadastroVideo(){
//   return (
//     <div>
//       Pagina de cadastro de video
//     </div>
//   )  
// }

const Pagina404 = () =>(<div>Pagina 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>      
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      {/* <Route component={()=> (<div>Pagina 404</div>)} /> */}
      <Route component={Pagina404} />
    </Switch>
    
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);


