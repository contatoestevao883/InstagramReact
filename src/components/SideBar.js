import React from 'react';
import Sugestoes from './Sugestoes';
import Usuario from './Usuario';

export default function SideBar() {
    return(
        <div class="side-bar">

            <Usuario />
            <Sugestoes />
            
        </div>
    )
}