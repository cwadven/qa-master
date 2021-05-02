import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
        <div className="Navigation">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">QA-MASTER</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="게시판 더보기" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">게시판1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">게시판2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">게시판3</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">게시판4</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;