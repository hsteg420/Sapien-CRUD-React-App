import {
  Navbar,
  Container,
  Row,
  Col,
  NavDropdown,
  Nav,
  Offcanvas,
  Button,
  Modal,
  Alert,
} from "react-bootstrap";
import AddForm from "../leads/AddModal";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    handleCloseModal();

    return () => {
      handleShowAlert();
    };
  }, []);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          CRUD Management
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
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

        <Button
          onClick={handleShowModal}
          className="btn btn-success"
          data-toggle="modal"
          style={{ marginRight: "10px" }}

        >
          Add New Client
        </Button>
        <Alert show={showAlert} variant="success">
          Client List Updated Successfully!
        </Alert>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Client</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close Button
            </Button>
          </Modal.Footer>
        </Modal>

        <Button variant="secondary" onClick={handleShow}>
          Sidebar
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
export default Header;
