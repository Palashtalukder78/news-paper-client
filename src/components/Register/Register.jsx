import { useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Register = () => {
  const {registerUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister =(event)=>{

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    

    registerUser(email,password)
    .then(result=>{
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
    .catch(error=>{
      console.log(error.message)
    })
  }
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={4}>
            <h4 className="text-center">Please Register</h4>
          <div className="scrollable-form bg-light p-4 rounded">
            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3" >
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" placeholder="Enter Photo URL" name="photo" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Photo URL" name="email" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Check type="checkbox" label="Accept terms and condition" name="accept" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Submit
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
