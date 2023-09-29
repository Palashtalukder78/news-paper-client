import { useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useState } from "react";

const Register = () => {
  const {registerUser} = useContext(AuthContext);
  const [accepted,setAccepted] = useState(false)
  const navigate = useNavigate();

  const handleTerm = (event)=>{
    setAccepted(event.target.checked);
  }
  const handleRegister =(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    registerUser(email, password)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate("/login");
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
    <Container>
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={4}>
          <h4 className="text-center">Please Register</h4>
          <div className="scrollable-form bg-light p-4 rounded">
            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Photo URL"
                  name="photo"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Photo URL"
                  name="email"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  onClick={handleTerm}
                  type="checkbox"
                  label={
                    <>
                      Accept <Link to="/term">terms and conditions</Link>
                    </>
                  }
                  name="accept"
                />
              </Form.Group>

              <Button
                variant="primary"
                disabled={!accepted}
                type="submit"
                className="w-100"
              >
                Register
              </Button>
              <Form.Text className="text-muted text-center">
                <Link to="/login">Already have an account </Link>
              </Form.Text>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
