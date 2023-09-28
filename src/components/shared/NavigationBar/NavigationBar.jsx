import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import userPhoto from "../../../assets/user.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout =()=>{
  logOut()
    .then(() => {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Logout Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/category/0")
    })
    .catch((errorText) => {
      const error = errorText.message;
      const startIndex = error.indexOf("(") + 1;
      const endIndex = error.indexOf(")");
      const errorMessage = error.slice(startIndex, endIndex).trim();

      const parts = errorMessage.split("/");
      const desiredMessage = parts[1] || parts[0];
      toast.error(desiredMessage);
    });
  }
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
              <Button onClick={handleLogout} varient="primary" className="ms-2">
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
