import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import Navbar from 'react-bootstrap/Navbar';
import Sidebar from './sidebar';


function Inbox() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    
      </Container>
    </Navbar>
    <Sidebar/>
    </>
  );
}

export default Inbox;