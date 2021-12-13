import mine from '../mine.jpg'
const Intro = () => {
    return (
        <div className="introContainer">
            <div id="aboutme">
                <h1>Tushar Rajpoot</h1>
                <p>I'm a web/software developer with strong interest in DevOps and cloud native technologies.
                I love to build projects and sharing my experience as tips and learn new technologies.
            </p>
            </div>
            <img alt="" src={mine}/>
            <hr />
        </div>
    )
}
export default Intro;