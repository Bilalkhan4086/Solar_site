import { navigate } from 'gatsby';
import React from 'react';
import { Navbar,Container,Nav, NavDropdown} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"

export const NavBar = () =>{
  return(
    <Navbar collapseOnSelect expand="lg" style={{background: "linear-gradient(90deg, rgba(5,50,76,1) 14%, rgba(106,189,69,1) 100%)"}} variant="dark">
  <Container>
  <Navbar.Brand href="#home" style={{fontWeight:"bolder"}}><span className='logoColor'>SOL</span><span className='logoColor2'>ARIC</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
    <Nav.Link href="/" style={{color:"white",fontSize:"16px"}}>Home</Nav.Link>
      <Nav.Link href="/packages" style={{color:"white",fontSize:"16px"}}>Packages</Nav.Link>
      <Nav.Link href="/calculator" style={{color:"white",fontSize:"16px"}}>Solar Calculator</Nav.Link>
      <Nav.Link href="/services" style={{color:"white",fontSize:"16px"}}>Services</Nav.Link>
      <NavDropdown title={
        <span style={{color:"white",fontSize:"16px"}}> 
          About
        </span>
      } className="#nav-dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item  href="/about">About</NavDropdown.Item>
        <NavDropdown.Item  href="about/#Team">Team</NavDropdown.Item>
        <NavDropdown.Item  href="/gallery">Gallery</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
)
} 

{/* <Navbar key="lg" style={{background: "linear-gradient(90deg, rgba(102,177,79,0.9948354341736695) 32%, rgba(102,177,79,0.7959558823529411) 77%)"}} variant="dark" expand="lg" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#home" style={{fontWeight:"bolder"}}><span className='logoColor'>SOL</span><span className='logoColor2'>ARIC</span></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar> */}
