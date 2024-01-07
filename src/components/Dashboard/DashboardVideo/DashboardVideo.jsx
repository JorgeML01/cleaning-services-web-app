import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Container from "react-bootstrap/Container";

function DashboardVideo() {
  return (
    <video className="VideoTag" autoPlay loop muted>
      <source
        src="https://video.wixstatic.com/video/11062b_989ef4fbeff04227933fa60f858282fe/1080p/mp4/file.mp4"
        type="video/mp4"
      />
    </video>
  );
}

export default DashboardVideo;
