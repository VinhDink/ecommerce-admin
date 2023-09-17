import React from "react";
import { Link } from "react-router-dom"; 
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/seller-approval">Wepaid admin</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/seller-approval">Seller Approval</Nav.Link>
        <Nav.Link as={Link} to="/category-manager">Category Manager</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;