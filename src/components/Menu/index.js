import React from 'react';
import Logo from '../../assets/img/Logo.png';
//import './menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import {LogoImage, MenuWrapper} from './style.js';

function Menu(){
    return(
        <MenuWrapper className="Menu">
            <a href="/"> 
                <LogoImage src={Logo} alt="Aluraflix logo"/>
            </a> 
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>          
        </MenuWrapper>
    );
}

export default Menu;