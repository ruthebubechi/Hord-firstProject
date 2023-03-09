import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="mb-3 bg-white shadow-sm">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/login" as={NavLink}>
            Login
          </Nav.Link>
          <Nav.Link to="/signup" as={NavLink}>
            Signup
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
