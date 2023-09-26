import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import userPhoto from "../../../assets/user.png"
import {  Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const NavigationBar = () => {

  const {user} = useContext(AuthContext)
    return (
      <Navbar collapseOnSelect expand="lg" className=" my-4">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
                <NavLink
                  className="text-decoration-none"
                  style={({ isActive }) => {
                    return {
                      borderTop: isActive ? "1px solid red" : "none",
                      borderBottom: isActive ? "1px solid red" : "none",
                    };
                  }}
                  to="/category/0"
                >
                  Home
                </NavLink>
            </Nav>
            <Nav className="align-items-center">
              {user && (
                <>
                  <small>{user.displayName}</small>
                  <Image src={userPhoto} width={30} height={30} roundedCircle />
                </>
              )}
              {user ? (
                <Button varient="primary" className="ms-2">
                  Log Out
                </Button>
              ) : (
                <Link to="/login">
                  <Button varient="primary" className="ms-2">
                    Login
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavigationBar;