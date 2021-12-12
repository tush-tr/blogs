import Navbar from './home/menubar'
import SocialBar from './home/social'
import Intro from './home/intro'
import {React} from 'react'
import './homepage.css'
const HomePage = () => {
    return (
        <div>
            <header className="headercss">
                <Navbar />
                <SocialBar />             
            </header>
            <Intro />
        </div>

    )
}
export default HomePage