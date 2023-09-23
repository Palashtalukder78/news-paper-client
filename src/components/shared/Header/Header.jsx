import { Button } from "react-bootstrap";
import logo from "../../../assets/logo.png"
import Marquee from "react-fast-marquee";
import moment from "moment/moment";
const Header = () => {
    return (
      <div className="text-center my-4">
        <img src={logo} alt="Logo" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        <div className="col-md-6 mx-auto d-flex bg-light">
          <Button variant="danger">
            News
          </Button>

          <Marquee speed={50} pauseOnHover="true">
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </div>
      </div>
    );
};

export default Header;