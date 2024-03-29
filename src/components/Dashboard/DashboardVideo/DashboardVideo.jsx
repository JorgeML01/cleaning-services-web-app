import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import CheckCircle from "../../../images/vectors/CheckCircle";
import "./styles.css";

function DashboardVideo() {
  return (
    <div>
      <div className="video-background">
        <video className="VideoTag" autoPlay loop muted playsInline>
          <source
            src="https://video.wixstatic.com/video/11062b_989ef4fbeff04227933fa60f858282fe/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-background-content div1">ONE CALL,</div>
        <div className="video-background-content div2">CLEANS IT ALL</div>
        <div className="video-background-content div3">
          Experience our Fresh & Express Cleanliness,
        </div>
        <div className="video-background-content div4">
          Faster than You Can Blink
        </div>
      </div>
      <div className="div-number">
        <span className="span-contact">Contact Us! </span>
        (512) 758-5749
      </div>
      <div className="checks">
        <Container>
          <Row>
            <Col lg={4} xs={12} md={4} className="mb-4">
              <CheckCircle style={{ marginBottom: "40px" }} />
              <span className="check-text">Guaranteed Satisfaction</span>
            </Col>
            <Col lg={4} xs={12} md={4} className="mb-4">
              <CheckCircle />
              <span className="check-text">
                Certified Professional Cleaning
              </span>
            </Col>
            <Col lg={4} xs={12} md={4} className="mb-4">
              <CheckCircle />
              <span className="check-text">Eco-Friendly Delivery</span>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default DashboardVideo;
