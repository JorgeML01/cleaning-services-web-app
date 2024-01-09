import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
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
        <div id="button-call-now">Call Now</div>
      </div>
      <div className="div-number">
        <span className="span-contact">Contact Us! </span>
        (512) 758-5749
      </div>
    </div>
  );
}

export default DashboardVideo;
