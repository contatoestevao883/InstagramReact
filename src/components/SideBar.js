import React from 'react';
import Sugestoes from './Sugestoes';
import Usuario from './Usuario';

export default function SideBar() {
    return(
        <div class="side-bar">

            <Usuario />
            <Sugestoes />
            <div class="texto">
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
                <p class="texto-p">© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    )
}