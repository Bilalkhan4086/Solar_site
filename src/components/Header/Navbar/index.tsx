import { navigate } from 'gatsby';
import React from 'react';
import { Navbar,Container,Nav, NavDropdown} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"

export const NavBar = () =>{
  return(
    <Navbar collapseOnSelect expand="lg" style={{background: "linear-gradient(90deg, rgba(102,177,79,0.9948354341736695) 32%, rgba(102,177,79,0.7959558823529411) 77%)"}} variant="dark">
  <Container>
  <Navbar.Brand href="#home" style={{fontWeight:"bolder"}}><span className='logoColor'>SOL</span><span className='logoColor2'>ARIC</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav style={{fontWeight:"bolder"}} >
    <Nav.Link href="#featuress" style={{color:"white"}}>Home</Nav.Link>
      <Nav.Link href="#deets" style={{color:"white"}}>Packages</Nav.Link>
      <Nav.Link href="#memes" style={{color:"white"}}>Solar Calculator</Nav.Link>
      <Nav.Link href="#memes" style={{color:"white"}}>Services</Nav.Link>
      {/* <Nav.Link href="#memes" style={{color:"white"}}>Contact</Nav.Link> */}
      <NavDropdown title={
        <span style={{color:"white"}}> 
          About
        </span>
      } className="#nav-dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item  href="#action/3.1">About</NavDropdown.Item>
        <NavDropdown.Item  href="#action/3.2">Team</NavDropdown.Item>
        <NavDropdown.Item  href="#action/3.3">Gallery</NavDropdown.Item>
        <NavDropdown.Divider/>
        <NavDropdown.Item style={{color:"white"}} href="#action/3.4">Portfolio</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
} 