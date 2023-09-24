import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/shared/Header/Header";
import NavigationBar from "../components/shared/NavigationBar/NavigationBar";
import LeftNav from "../components/shared/Navs/LeftNav/LeftNav";
import RightNav from "../components/shared/Navs/RightNav/RightNav";
import Footer from "../components/shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import Category from "../components/Category/Category";

const Main = () => {
    return (
      <>
        <Header></Header>
        <NavigationBar></NavigationBar>
        <Container>
          <Row className="bg-light p-3">
            <Col lg={3} className="bg-white">
              <LeftNav></LeftNav>
            </Col>
            <Col lg={6}>
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

export default Main;