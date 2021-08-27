import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Dropdown,
  ButtonGroup,
  DropdownButton,
} from "react-bootstrap";

import "./MyNav.css";

export default function MyNav() {
  return (
    <Navbar className = "my-nav"  variant="dark">
      <Navbar.Brand href="#home">
        <img src="/images/logo.png" alt="logo" srcset="" id="netflixlogo" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Tv Shows</Nav.Link>
        <Nav.Link href="#pricing">Movies</Nav.Link>
        <Nav.Link href="#pricing">Recently Added</Nav.Link>
        <Nav.Link href="#pricing">My List</Nav.Link>
      </Nav>
      <Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Nav.Link href="#deets">Kids</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          <DropdownButton className="bg-dark user-button" title="User">
            <Dropdown.ItemText>Your Account</Dropdown.ItemText>
            <Dropdown.Item as="button">Profile</Dropdown.Item>
            <Dropdown.Item as="button">Help</Dropdown.Item>
            <Dropdown.Item as="button">Contact Us</Dropdown.Item>
          </DropdownButton>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
