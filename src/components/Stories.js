
export default function Stories(){
    
    const stories = [
        {image: '/assets/img/9gag.svg', title: '9gag'},
        {image: '/assets/img/meowed.svg', title: 'meowed'},
        {image: '/assets/img/barked.svg', title: 'barked'},
        {image: '/assets/img/nathanwpylestrangeplanet.svg', title: 'nathanwpyle...'},
        {image: '/assets/img/wawawicomics.svg', title: 'wawawiwac...'},
        {image: '/assets/img/respondeai.svg', title: 'respondeai'},
        {image: '/assets/img/filomoderna.svg', title: 'filomoderna'},
        {image: '/assets/img/memeriagourmet.svg', title: 'memeriago...'}
    ]
    return(
        <div class="stories">
            {stories.map((story, index) => <Story key={index} image={story.image} title={story.title}/>)}
        </div>
    )
}

 function Story(props){
    return (
            <div key={props.index} class="stories-card">
                <div class="div-card">
                    <img class="stories-img" src={props.image}/>
                </div>
                <p class="stories-p">{props.title}</p>
            </div>
  )
}  