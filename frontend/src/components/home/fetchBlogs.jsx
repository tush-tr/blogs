import BlogCard from './BlogCard'
import './imageCard.css'
import './imageCard.scss'

const FetchImages = ({blogs})=>{
    return(
        <div className="imageCards ">
            {
                blogs.map(({id,slug,title,content,coverPhoto})=>(
                    <BlogCard blogid={id} key={id} image={coverPhoto.url} content={content} title={title} slug={slug} />
                ))
            }
        </div>

    )
}
export default FetchImages