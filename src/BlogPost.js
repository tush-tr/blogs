import BlogPage from './blogposts/BlogPage'
import HomeHeader from './home/homepage'
import FetchImages from './home/fetchImg'
const BlogPost = ()=>{
    return(
        <div>
            <HomeHeader />
            <BlogPage />
            <div>
                <h3>Check some other blogs</h3>
                <FetchImages />
            </div>
        </div>
    )
}
export default BlogPost;