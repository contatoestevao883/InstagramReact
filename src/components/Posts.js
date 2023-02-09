import React from 'react';
import {FiSend} from 'react-icons/fi'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {TbMessageCircle2} from 'react-icons/tb'
import {BiBookmark} from 'react-icons/bi'

export default function Posts(){

    const listOfPosts = [
        {title: 'meowed', image: '/assets/img/meowed.svg', post: '/assets/img/gato-telefone.svg', comentary: '/assets/img/respondeai.svg', user: 'respondeai', likes: 101523},
        {title: 'barked', image: 'assets/img/barked.svg', post: '/assets/img/dog.svg', comentary: '/assets/img/adorable_animals.svg',  user: 'adorable_animals', likes: 99159},
        {title: 'smallcutecats', image: '/assets/img/smallcutecats.svg', post: '/assets/img/Cat03.jpg', comentary: '/assets/img/razoesparaacreditar.svg', user: 'razoesparaacreditar', likes: 5300}
    ]

    return (
        <div>
            {listOfPosts.map((element, index) => <Post key ={index }title={element.title} image={element.image} post={element.post}comentary={element.comentary} user={element.user} likes={element.likes}/>)}
        </div>
        )
    }



function Post(props){
    {console.log(props)}
    return (    
        <div>
            <div data-test="post" class="main">
                <div class="box" key={props.index}>
                    <div class="container">
                        <img data-test="post-image" src={props.image}/>
                        <p class="title">{props.title}</p>
                    </div>
                    <BiDotsHorizontalRounded class="dots"/>
                </div>
                <img src={props.post}/>
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
                    <img src={props.comentary} />
                    <span>Curtido por <strong>{props.user}</strong> e outras <strong data-test="likes-number">{props.likes} pessoas</strong></span>
                </div>
            </div>
        </div>
    )
}