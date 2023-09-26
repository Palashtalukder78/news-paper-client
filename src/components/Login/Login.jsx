import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={4}>
          <h4 className="text-center">Please Login</h4>
          <div className="scrollable-form bg-light p-4 rounded">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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
