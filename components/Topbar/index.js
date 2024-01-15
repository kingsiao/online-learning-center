import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function Topbar() {
  const routes = [
    {
      href: "/",
      label: "HOME",
    },
    {
      href: "/search",
      label: "SEARCH",
    },
    {
      href: "/about",
      label: "ABOUT US",
    },
    {
      href: "/member",
      label: "MEMBER LIBRARIES",
    },
    {
      href: "/contact",
      label: "CONTACT US",
    },
  ];

  return (
    <Navbar expand="lg" className="bg-white" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navigation-link">
            {routes.map((route) => (
              <Nav.Link className="text-dark m-1" href={route.href}>
                {route.label}
              </Nav.Link>
            ))}

            <Nav.Link className="text-dark m-1" href="/">
              HOME
            </Nav.Link>
            <Nav.Link className="text-dark m-1" href="/search">
              SEARCH
            </Nav.Link>
            <Nav.Link className="text-dark m-1" href="/about">
              ABOUT US
            </Nav.Link>
            <Nav.Link className="text-dark m-1" href="/member">
              MEMBER LIBRARIES
            </Nav.Link>
            <Nav.Link className="text-dark m-1" href="/contact">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
