import React, { createElement, useState } from 'react';
import {FiSend} from 'react-icons/fi'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {TbMessageCircle2} from 'react-icons/tb'
import {BsBookmark} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {BsFillBookmarkFill} from 'react-icons/bs'

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

    const [likesCount, setLikesCount] = useState(props.likes)
    const [addHeart, setAddHeart] = useState(false)
    const [savePost, setSavePost] = useState(false)
    
    const sumLikes = () => {
        setLikesCount(likesCount + 1)
        console.log(likesCount)
    }

    const decLikes = () => {
        setLikesCount(likesCount - 1)
        console.log(likesCount)
    }

    const doubleClick = () =>{
        if(addHeart === false){
            setAddHeart(!addHeart)
            sumLikes()
        }
    }

    const oneClick = () => { 
        if(addHeart === false){
            setAddHeart(!addHeart)
            sumLikes()
        }else{
            setAddHeart(!addHeart)
            decLikes()
        }
    }

    const oneClickBookmark = () => { 
            setSavePost(!savePost)

    }

    return (    
        <div>
            <div data-test="post" class="main">
                <div class="box"  key={props.index}>
                    <div class="container">
                        <img data-test="post-image" src={props.image}/>
                        <p class="title">{props.title}</p>
                    </div>
                    <BiDotsHorizontalRounded class="dots"/>
                </div>
                <img onDoubleClick={doubleClick} src={props.post}/>
                <div class="div-logo">
                    <div class="logos-img-div">
                       {addHeart === false ? <button data-test="like-post" class="logos-imgs heart" onClick={oneClick}><AiOutlineHeart class="logos-imgs heart"/></button> : <button data-test="like-post" class="logos-imgs heartfill" onClick={oneClick} ><AiFillHeart class="logos-imgs heartfill"/></button>}
                       <button class="logos-imgs"><TbMessageCircle2 class="logos-imgs circle"/></button> 
                       <button class="logos-imgs"><FiSend class="logos-imgs send"/></button>
                    </div>
                    <div className='bookmark-div'>
                        {savePost === false ? <BsBookmark onClick={oneClickBookmark} data-test="save-post" class="bookmark"/> : <BsFillBookmarkFill onClick={oneClickBookmark} data-test="save-post" onclass="bookmarkfill"/>}
                    </div>
                </div>
                <div class="comentary">
                    <img src={props.comentary} />
                    <span>Curtido por <strong>{props.user}</strong> e outras <strong><span data-test="likes-number">{likesCount}</span> pessoas</strong></span>
                </div>
            </div>
        </div>
    )
}