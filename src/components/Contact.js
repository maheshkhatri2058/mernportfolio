import 'animate.css';
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  

  function  handleSubmit(e) {
    e.preventDefault();
    alert("Thank You for your contact");
    e.preventDefault();
    let form=e.target;
    let names=form.name.value;
    let emails=form.email.value;
    let message=form.message.value;
    console.log(`Name: ${names}, Email: ${emails}, Message: ${message}`);
    form.reset();

  };

  return (
    <section className="contact animate__animated animate__zoomIn" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit} name='form'>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="First Name" name="name" onChange={(e) =>  e.target.value} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Last Name" onChange={(e) => e.target.value}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"name="email" placeholder="Email Address" onChange={(e) =>e.target.value} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel"  placeholder="Phone No." onChange={(e) => e.target.value}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  name="message" placeholder="Message" onChange={(e) =>e.target.value}></textarea>
                      <input type="submit" value="Submit" />
                      <p className='text-sm text-red-500  font-bold p-2 animate__animated animate__flash'>      *For Fast Reply PLease contact me on LinkedIn or Twitter!!!
                        </p>
                    </Col>
                    
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
