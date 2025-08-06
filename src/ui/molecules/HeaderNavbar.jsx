import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';


export const HeaderNavbar = () => {

    return(
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#"><h2>Go Daddy</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
            <Nav.Link href="#action1">Domain Names</Nav.Link>
            <Nav.Link href="#action2">Websites&Hosting</Nav.Link>
            <Nav.Link href="#action2">Commerce</Nav.Link>
            <Nav.Link href="#action2">Email&Marketing</Nav.Link>
            <Nav.Link href="#action2">Expert Services</Nav.Link>
            <Nav.Link href="#action2">More</Nav.Link>
            
           
          </Nav>
          <Nav >
             <div className="mt-2">
        <SplitButton
          align={{ lg: 'start' }}
          title="Sign In"
          id="dropdown-menu-align-responsive-2"
          size="sm"
          variant="secondary"
        >
          <Dropdown.Item eventKey="1">Sign In</Dropdown.Item>
            <Dropdown.Item eventKey="2">Create an account</Dropdown.Item>
            
            <Dropdown.Divider />
            <Dropdown.Item eventKey="3">Sign in to office Email</Dropdown.Item>
            <Dropdown.Item eventKey="4">Sign in to GoDaddy Webmail</Dropdown.Item>
        </SplitButton>
      </div>
         

            <Nav.Link href="#action2">Help Center</Nav.Link>
             <Nav.Link href="#action2"> </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   </div>
    )
}