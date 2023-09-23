import { Button } from "react-bootstrap";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
const LoginWithSocial = () => {
    return (
      <>
        <div className="mb-4">
          <h5>Login with</h5>
          <Button variant="outline-primary" className="w-100">
            <FaFacebookF className="me-2" />
            Login With Google
          </Button>
          <Button variant="outline-secondary" className="w-100 my-2">
            <FaGithub className="me-2" />
            Login With Github
          </Button>
        </div>
      </>
    );
};

export default LoginWithSocial;