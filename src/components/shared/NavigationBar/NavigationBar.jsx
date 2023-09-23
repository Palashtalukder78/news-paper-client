import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import userPhoto from "../../../assets/user.png"
const NavigationBar = () => {
    return (
      <Navbar collapseOnSelect expand="lg" className=" my-4">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              <Image src={userPhoto} width={30} height={30} roundedCircle />
              <Button varient="primary" className="ms-2">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavigationBar;