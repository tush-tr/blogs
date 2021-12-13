import BlogPage from './blogposts/BlogPage'
import HomeHeader from './home/homepage'
import FetchBlogs from './home/fetchBlogs'
const BlogPost = ()=>{
    return(
        <div>
            <HomeHeader />
            <BlogPage />
            <div>
                <h3>Check some other blogs</h3>
                <FetchBlogs />
            </div>
        </div>
    )
}
export default BlogPost;