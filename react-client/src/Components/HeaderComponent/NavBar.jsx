import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-dark bg-dark">
                <Navbar expand="lg">
                    <Navbar.Brand href="/">Lumé Quenta</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="forum">Forum</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                            <Nav.Link href='contact'>Contact</Nav.Link>
                        </Nav>
                </Navbar>
                </nav>
            </header>
        )
    }
}
export default NavBar;