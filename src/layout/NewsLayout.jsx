import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/shared/Header/Header";
import { Outlet } from "react-router-dom";
import RightNav from "../components/shared/Navs/RightNav/RightNav";
import Footer from "../components/shared/Footer/Footer";


const NewsLayout = () => {
    return (
      <>
        <Header></Header>
        <Container>
          <Row className="bg-light p-3">
            <Col lg={9}>
              <Outlet />
            </Col>
            <Col lg={3} className="bg-white">
              <RightNav></RightNav>
            </Col>
          </Row>
        </Container>
        <div className="text-center">
          <Footer></Footer>
        </div>
      </>
    );
};

export default NewsLayout; 