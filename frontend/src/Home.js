import HomeHeader from './home/homepage'
import FetchBlogs from './home/fetchBlogs'
export default function HomeIndexPage(){
    return (
        <div className="ImageSection">
            <HomeHeader />
            <FetchBlogs />
        </div>
    )
}