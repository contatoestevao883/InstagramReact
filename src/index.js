import React from 'react';
import {FiSend} from 'react-icons/fi'
import {AiOutlineCompass} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {TbMessageCircle2} from 'react-icons/tb'
import {BiBookmark} from 'react-icons/bi'
import {RiPencilFill} from 'react-icons/ri'
import ReactDOM from "react-dom"

const Header = () => {
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

const Stories = () => {
    return (
        <div class="stories">

                <div class="stories-card">
                    <div class="div-card">
                        <img class="stories-img" src="/assets/img/9gag.svg"/>
                    </div>
                    <p class="stories-p">9gag</p>
                </div>

                <div class="stories-card">
                    <div class="div-card">
                        <img class="stories-img" src="/assets/img/meowed.svg"/>
                    </div>
                    <p class="stories-p">meowed</p>
                </div>

                <div class="stories-card">
                    <div class="div-card">
                        <img class="stories-img" src="/assets/img/barked.svg"/>
                    </div>
                    <p class="stories-p">barked</p>
                </div>

                <div class="stories-card">
                    <div class="div-card">
                        <img class="stories-img" src="/assets/img/nathanwpylestrangeplanet.svg"/>
                    </div>
                    <p class="stories-p">nathanwpyle...</p>
                </div>

                <div class="stories-card">
                    <div class="div-card">
                        <img class="stories-img" src="/assets/img/wawawicomics.svg"/>
                    </div>
                    <p class="stories-p">wawawiwac...</p>
                </div>

                <div class="stories-card">
                    <div class="div-card">
                        <img class="stories-img" src="/assets/img/respondeai.svg"/>
                    </div>
                    <p class="stories-p">respondeai</p>
                </div>

                <div class="stories-card">
                    <div class="div-card">
                        <img class="stories-img" src="/assets/img/filomoderna.svg"/>
                    </div>
                    <p class="stories-p">filomoderna</p>
                </div>

                <div class="stories-card">
                    <div class="div-card">
                        <img class="stories-img" src="/assets/img/memeriagourmet.svg"/>
                    </div>
                    <p class="stories-p">memeriago...</p>
                </div>

        </div>
    )
}

const Main = () => {
    return (    
        <div>
            <div class="main">
                <div class="box">
                    <div class="container">
                        <img src='/assets/img/meowed.svg'/>
                        <p class="title">meowed</p>
                    </div>
                    <BiDotsHorizontalRounded/>
                </div>
                <img src='/assets/img/gato-telefone.svg' />
                <div class="div-logo">
                    <div class="logos-img">
                        <AiOutlineHeart class="logos-imgs"/>
                        <TbMessageCircle2 class="logos-imgs" />
                        <FiSend class="logos-imgs"/>
                    </div>
                    <div>
                        <BiBookmark class="bookmark"/>
                    </div>
                </div>
                <div class="comentary">
                    <img src='/assets/img/respondeai.svg' />
                    <span>Curtido por <strong>respondeai</strong> e outras <strog>101523 pessoas</strog></span>
                </div>
            </div>

            <div class="main">
                <div class="box">
                    <div class="container">
                        <img src='assets/img/barked.svg'/>
                        <p class="title">barked</p>
                    </div>
                    <BiDotsHorizontalRounded/>
                </div>
                <img src='assets/img/dog.svg' />
                <div class="div-logo">
                    <div class="logos-img">
                        <AiOutlineHeart class="logos-imgs"/>
                        <TbMessageCircle2 class="logos-imgs" />
                        <FiSend class="logos-imgs"/>
                    </div>
                    <div>
                        <BiBookmark class="bookmark"/>
                    </div>
                </div>
                <div class="comentary">
                    <img src='assets/img/respondeai.svg' />
                    <span>Curtido por <strong>adorable_animals</strong> e outras <strog>99159 pessoas</strog></span>
                </div>
            </div>
        </div>
    )
}

const SideBar = () => {
    return(
        <div class="side-bar">
            <div class="side-bar-profile">
                <img src='/assets/img/catanacomics.svg'/>
                <span class="span-content">catanacomics</span>
                <RiPencilFill />
            </div>
            <div class="sugestions">
                <span class="sugestion">Sugestões para você</span>
                <span class="ver-tudo">Ver tudo</span>
            </div>
            <div class="users1">
                <div class="users-content">
                    <img src="/assets/img/bad.vibes.memes.svg"/>
                </div>
                <div class="follow">
                    <div class="span-h3">
                        <span class="follow-user">bad.vibes.memes</span>
                        <h3>Seguir</h3>
                     </div>
                     <span class="second-span">Segue você</span>
                </div>
            </div>

            <div class="users">
                <div class="users-content">
                    <img src="/assets/img/bad.vibes.memes.svg"/>
                </div>
                <div class="follow">
                        <span class="follow-user">chilbidart</span>
                        <span class="second-span">Segue você</span>
                    <h3>Seguir</h3>
                </div>
            </div>

            <div class="users">
                <div class="users-content">
                    <img src="/assets/img/bad.vibes.memes.svg"/>
                </div>
                <div class="follow">
                        <span class="follow-user">razoesparacreditar</span>
                        <span class="second-span">Novo no Instagram</span>
                    <h3>Seguir</h3>
                </div>
            </div>

            <div class="users">
                <div class="users-content">
                    <img src="/assets/img/bad.vibes.memes.svg"/>
                </div>
                <div class="follow">
                        <span class="follow-user">adorable_animals</span>
                        <span class="second-span">Segue você</span>
                    <h3>Seguir</h3>
                </div>
            </div>

            <div class="users">
                <div class="users-content">
                    <img src="/assets/img/bad.vibes.memes.svg"/>
                </div>
                <div class="follow">
                        <span class="follow-user">smallcutecats</span>
                        <span class="second-span">Segue você</span>
                    <h3>Seguir</h3>
                </div>
            </div>
        </div>
    )
}
const App = () => {
    return (
        <div class="app">
            <Header />
            
            <div>
                <div class="content">
                    <Stories />
                    <SideBar />
                </div>
                <Main />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"))