import Navbar from './menubar'
import SocialBar from './social'
import SearchBar from './searchbar'
import Intro from './intro'
const Header = ({searchData})=>{
    return(
        <div>
            <header >
            <div className="searchTop">
                    <div className="logo-holder logo-3">
                        <a href="/">
                            <h3>Blogs</h3>
                            <p>By Tushar</p>
                        </a>
                    </div>
                    <SearchBar placeholder="Search"
                        onChange={(e) => searchData(e.target.value)} />
                </div>
                <div className="headercss">
                    <Navbar />
                    <SocialBar />
                </div>
            </header>
            <Intro />
        </div>
    )
}
export default Header;