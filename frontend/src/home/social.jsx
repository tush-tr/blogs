import { Nav } from 'react-bootstrap'
const SocialBar = ()=>{
    return (
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link eventKey="link-1" href="/home">
                <i class="fab fa-twitter"></i>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navitems" eventKey="link-2"><i class="fab fa-github"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3"><i class="fab fa-youtube"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-4"><i class="fab fa-linkedin"></i></Nav.Link>
            </Nav.Item>
        </Nav>

    )
}
export default SocialBar;