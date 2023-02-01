import React from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>CRUD</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">
            <Link className="text-light text-decoration-none" to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link href="#features">
            <Link className="text-light text-decoration-none" to="/signup">
              Signup
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="text-light text-decoration-none" to="/signin">
              Signin
            </Link>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <Link className="text-light text-decoration-none" onClick={props.onLogout}>
              Logout
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
