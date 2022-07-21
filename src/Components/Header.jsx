import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Fakestore</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default (Header);
