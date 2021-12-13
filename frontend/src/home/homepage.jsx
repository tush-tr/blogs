import Navbar from './menubar'
import SocialBar from './social'
import Intro from './intro'
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