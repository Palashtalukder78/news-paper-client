import { FaTwitter, FaInstagram } from "react-icons/fa";
import { ListGroup } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa6";

const FindUsOn = () => {
  return (
    <div className="mb-4">
      <h5>Find Us On</h5>
      <ListGroup>
        <ListGroup.Item>
          <FaFacebookF className="text-primary" />
          <button className="btn btn-link text-decoration-none ">
            Facebook
          </button>
        </ListGroup.Item>
        <ListGroup.Item className="text-secondary">
          <FaTwitter />
          <button className="btn btn-link text-decoration-none">Twitter</button>
        </ListGroup.Item>
        <ListGroup.Item>
          <FaInstagram className="text-warning" />
          <button className="btn btn-link text-decoration-none">
            Instagram
          </button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default FindUsOn;
