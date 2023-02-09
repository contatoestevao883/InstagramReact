import React from 'react';
import {FiSend} from 'react-icons/fi'
import {AiOutlineCompass} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'


export default function NavBar(){
    return(
        <header>
             <div class="logos">
                <img class="instagram-logo "src="/assets/img/logo-instagram.png"/>
                <div class="barra"></div>
                <img class="instagram" src="/assets/img/logo.png"/>
            </div>
            <div class="div-input">
                <input placeholder="Pesquisar" type="text"/>
            </div>
            <div class="div-logo-menu">
                <FiSend class="logo-menu"/>
                <AiOutlineCompass class="logo-menu" />
                <AiOutlineHeart class="logo-menu"/>
                <BsPerson class="logo-menu"/>
            </div>
        </header>
    );
}