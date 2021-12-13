import HomeHeader from './home/homepage'
import FetchImages from './home/fetchImg'
export default function HomeIndexPage(){
    return (
        <div className="ImageSection">
            <HomeHeader />
            <FetchImages />
        </div>
    )
}