import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../images/logo2.png'
import Button from 'react-bootstrap/Button';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <NavLink to="/">
                        <img src={logo}  width="100"/>
                    </NavLink>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                            <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                            >
                                <Nav.Link><i className="fas fa-shopping-cart shopping-cart"></i></Nav.Link>
                                <NavLink to="/login"><button className="btn-register">Login</button></NavLink>
                                {/* <Link to="/login">Login</Link> */}
                                {/* <Link to="/login"><button>Login</button></Link> */}
                                <NavLink to="/register" className="register-button">
                                    <Button variant="danger">Register</Button>
                                </NavLink>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
