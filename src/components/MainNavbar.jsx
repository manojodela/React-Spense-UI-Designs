import { Button, Container, Nav, NavbarBrand } from "react-bootstrap";
import { Link, redirect } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
const MainNavbar = () => {
    return <>
        <Navbar expand="lg">
            <Container>
                <NavbarBrand >Spence.</NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/" className="link active">Bussiness</Link>
                        <Link to="/pricing" className="link">Pricing</Link>
                        <Link to="/" className="link">Features</Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Link to="/login" className="link">Login</Link>
                        <Link to="/pricing" className="bg-dark border-0 btn text-white btn-green" >Get Started</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}
export default MainNavbar;