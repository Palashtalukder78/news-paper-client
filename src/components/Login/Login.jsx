import { useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
  const {loginUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/category/0';

  const handleLogin =(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        toast.success("Login Successfully");
        navigate(from);
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
          <h4 className="text-center">Please Login</h4>
          <div className="scrollable-form bg-light p-4 rounded">
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
              <Form.Text className="text-muted text-center">
                Don't Have an account? <Link to="/register">Register</Link>
              </Form.Text>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
