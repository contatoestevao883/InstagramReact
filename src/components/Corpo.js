import Stories from "./Stories"
import Posts from "./Posts"
import SideBar from "./SideBar"

export default function Corpo(){
    return (
        <div>
            <div class="content">
                <Stories />
                <SideBar />
            </div>
            <Posts />
        </div>
    )
}