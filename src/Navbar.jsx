import "./Navbar.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar, Nav} from 'react-bootstrap';

function MyNavbar(props) {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-purple px-5 py-3 sticky-top" bg="dark" expand="lg">
      <Navbar.Brand onClick={props.handleBalik}><img src={process.env.PUBLIC_URL + '/exer.svg'} alt="logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={props.handlePilihCurrency}>Currency</Nav.Link>
          <Nav.Link onClick={props.handlePilihSuhu}>Temperature</Nav.Link>
          <Nav.Link onClick={props.handlePorto}>Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;