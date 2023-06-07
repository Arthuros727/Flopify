import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Test from "./test.js";


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Flopify</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {/* <Link to="/">Home</Link> */}
            <Nav.Link href="/album">Album</Nav.Link>
            <Nav.Link href="#features">Genres</Nav.Link>
            <Nav.Link href="#pricing">Artiste</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
        
    </>
  );
}

export default ColorSchemesExample;