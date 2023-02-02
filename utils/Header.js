import {
  Navbar,
  Container,
  Row,
  Col,
  NavDropdown,
  Nav,
  Offcanvas,
  Button,
} from "react-bootstrap";
import { useState, useEffect } from "react";

function NavBar({ obj }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function onClick() {
    obj.setShow(true);
    console.log(obj.show);
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">CRUD Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <Button variant="secondary" onClick={handleShow}>
          Launch
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Container fluid>
            <Row>
                <Col>
                  <Nav.Link href="/home">Home</Nav.Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Nav.Link href="/addClient">Add Client</Nav.Link>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Nav.Link href="/showDetails">Show Details</Nav.Link>
                </Col>
              </Row>
            </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}
export default NavBar;
