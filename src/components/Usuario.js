import { useState } from 'react'
import {RiPencilFill} from 'react-icons/ri'



export default function Usuario(){

    const [nome, setNome] = useState('catanacomics')
    const [imagem, setImagem] = useState('/assets/img/catanacomics.svg')

    const changeName = () => {
        let nomeUsuario = prompt('Digite seu nome!!')
        if(nome !== ''){
            setNome(nomeUsuario)
        }if(nomeUsuario === ''){
            setNome(nome)
        }

}

const changeImage = () => {
    let imagemUsuario = prompt('Insira um novo link de imagem!!')
    if(imagem !== ''){
        setImagem(imagemUsuario)
    }if(imagemUsuario === ''){
        setImagem(imagem)
    }
}

    return(
        <div>
            <div class="side-bar-profile">
                <img data-test="profile-image" onClick={changeImage} src={imagem}/>
                <span data-test="name" class="span-content">{nome}</span>
                <RiPencilFill data-test="edit-name" onClick={changeName} class="pencil"/>
            </div>

            <div class="sugestions">
                <span class="sugestion">Sugestões para você</span>
                <span class="ver-tudo">Ver tudo</span>
            </div>
        </div>
    )

}