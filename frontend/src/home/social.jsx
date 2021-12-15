import { Nav } from 'react-bootstrap'
const SocialBar = ()=>{
    return (
        <Nav className="SocialBar" variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link eventKey="link-1" href="https://twitter.com/tush_tr604" target="_blank">
                <i class="fab fa-twitter"></i>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navitems" eventKey="link-2" href="https://github.com/tush-tr" target="_blank"><i class="fab fa-github"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3" href="https://www.youtube.com/channel/UCSL_wYi9WB-uPz2_OzKb7bg/videos" target="_blank"><i class="fab fa-youtube"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-4" href="https://www.linkedin.com/in/tushar-r-849510116/" target="_blank"><i class="fab fa-linkedin"></i></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
export default SocialBar;