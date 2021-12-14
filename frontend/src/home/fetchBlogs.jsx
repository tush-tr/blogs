import BlogCard from './BlogCard'
import './imageCard.css'
import './imageCard.scss'

const FetchImages = ({blogs})=>{
    return(
        <div className="imageCards ">
            {
                blogs.map((e)=>(
                    <BlogCard blogid={e.blogid} key={e.key} image={e.image} content={e.content} title={e.title} />
                ))
            }
        </div>

    )
}
export default FetchImages