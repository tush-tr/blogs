import { Nav } from 'react-bootstrap'
const Navbar = () => {
    return (
        <Nav className="firstNavItem" variant="tabs" defaultActiveKey="/home">
            <Nav.Item className="navItem">
                <Nav.Link href="/blogs">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/home">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/home">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/home">Blogging</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/home">Node.js</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/home">DevOps</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/home">Read more</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/home">Node.js</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/home">DevOps</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/home">Read more</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
export default Navbar;