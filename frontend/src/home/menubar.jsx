import { Navbar, Container, Nav } from 'react-bootstrap'
const NavbarMenu = () => {
    return (
        <Navbar collapseOnSelect expand="sm" >
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavbarMenu;