import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from '../assets/img/github-color-svgrepo-com.svg';
import navIcon3 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/twitter-svgrepo-com.svg';

export const Footer = () => {
  return (
    <footer className=" p-4 px-4 footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h2>MAHESH</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/maheshkhatri2058/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/maheshkhatri2058" className="text-white"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://x.com/Maheshk81989143"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
