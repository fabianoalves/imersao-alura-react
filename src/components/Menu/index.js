import React from 'react';
import Logo from '../../assets/img/Logo.png';
//import './menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import {LogoImage, MenuWrapper} from './style.js';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <MenuWrapper className="Menu">
            <Link to="/"> 
                <LogoImage src={Logo} alt="Aluraflix logo"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video/">
                Novo vídeo
            </Button> 
            {/* <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>           */}
        </MenuWrapper>
    );
}

export default Menu;