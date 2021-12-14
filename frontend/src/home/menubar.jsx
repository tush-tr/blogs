import { Nav } from 'react-bootstrap'
const Navbar = () => {
    return (
        <Nav className="firstNavItem" variant="tabs" defaultActiveKey="/home">
            <Nav.Item className="navItem">
                <Nav.Link href="/blogs">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/blogs">Blogging</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
export default Navbar;