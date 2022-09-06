import './intro.css'
import mine from '../../mine.jpg'
const Intro = () => {
    return (
        <div className="introContainer">
            <div id="aboutme">
                <h1>Tushar Rajpoot</h1>
                <p>I'm a web/software developer with strong interest in Cloud-Native technologies.
                I love to learn new technologies, build projects and share my learnings to others.
            </p>
            </div>
            <img alt="" src={mine}/>
            <hr />
        </div>
    )
}
export default Intro;