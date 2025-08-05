import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const HeaderNavbar = () => {

    return(
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Go Daddy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <div style={{fontSize:"10px"}}>
            <Nav.Link href="#action1">Domain Names</Nav.Link>
            <Nav.Link href="#action2">Websites&Hosting</Nav.Link>
            <Nav.Link href="#action2">Commerce</Nav.Link>
            <Nav.Link href="#action2">Email&Marketing</Nav.Link>
            <Nav.Link href="#action2">Expert Services</Nav.Link>
            <Nav.Link href="#action2">More</Nav.Link>
            </div>
           
          </Nav>
          <Nav className="d-flex">
             <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Rings</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Necklaces</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Earrings</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Bracelets</NavDropdown.Item>
             <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               More Collections
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#action2">Help Center</Nav.Link>
             <Nav.Link href="#action2"> </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}