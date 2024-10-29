import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import "./styles.scss";
import { useEffect, useState } from "react";
import IntroContent from "../../content/IntroContent.json";
import { VideoBlockProps } from "./types";

const VideoBlock = () => {
  const [introData, setIntroData] = useState<VideoBlockProps>();

  useEffect(() => {
    setIntroData(IntroContent);
  }, []);

  return (
    <section className="videoblock" id="intro">
      <video src="img/intro-video.mp4" autoPlay muted loop></video>
      <div className="overlay"></div>
      <Fade direction={"right"} triggerOnce className="fade-container">
        <Row justify="center" align="middle" className="textblock">
          <Col lg={24} md={18} sm={14} xs={12} className="text-container">
            <h6>{introData?.title}</h6>
            {introData?.sequence && (
              <TypeAnimation
                sequence={introData.sequence}
                speed={50}
                repeat={Infinity}
                className="typingBlock"
                wrapper="h5"
              />
            )}
          </Col>
        </Row>
      </Fade>
    </section>
  );
};

export default withTranslation()(VideoBlock);
