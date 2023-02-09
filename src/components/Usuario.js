import {RiPencilFill} from 'react-icons/ri'

export default function Usuario(){
    return(
        <div>
            <div class="side-bar-profile">
                <img src='/assets/img/catanacomics.svg'/>
                <span class="span-content">catanacomics</span>
                <RiPencilFill />
            </div>

            <div class="sugestions">
                <span class="sugestion">Sugestões para você</span>
                <span class="ver-tudo">Ver tudo</span>
            </div>
        </div>
    )

}