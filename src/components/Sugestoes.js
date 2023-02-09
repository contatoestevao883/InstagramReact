export default function Sugestoes(){
    const sugestoes = [
        {image: '/assets/img/bad.vibes.memes.svg', user: 'bad.vibes.memes'},
        {image: '/assets/img/chibirdart.svg', user: 'chilbidart'},
        {image: '/assets/img/razoesparaacreditar.svg', user: 'razoesparacreditar'},
        {image: '/assets/img/adorable_animals.svg', user: 'adorable_animals'},
        {image: '/assets/img/smallcutecats.svg', user: 'smallcutecats'}
    ]

    return(
       <div>
            {sugestoes.map((element) => <Sugestao image={element.image} user={element.user}/>)}
        </div>
    )
}






function Sugestao(props) {
        {console.log(props)}
    return(
        <div>
            <div class="users">
                    <div class="users-content">
                        <img src={props.image}/>
                    </div>
                    <div class="follow">
                        <div class="span-h3">
                            <span class="follow-user">{props.user}</span>
                            <h3>Seguir</h3>
                        </div>
                        <span class="second-span">Segue você</span>
                    </div>
                </div>
        </div>
    )
}