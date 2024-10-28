import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import AboutContent from "../../content/AboutContent.json";
import "./styles.scss";

const SkillsetBlock = () => {
  const [aboutData, setAboutData] = useState<{ title: string; text: string }>();
  const [aboutTextData, setAboutTextData] = useState<string>();

  useEffect(() => {
    setAboutData(AboutContent.about);
  }, []);

  useEffect(() => {
    const yearsOfExperience =
      new Date().getFullYear() - new Date("01/01/2019").getFullYear();

    setAboutTextData(
      aboutData?.text.replace(":yearsOfExperience", String(yearsOfExperience))
    );
  }, [aboutData]);

  return (
    <section id="about" className="about-section">
      <Slide direction="right" triggerOnce>
        <Row align={"middle"} justify={"center"}>
          <Col xl={24} lg={20} md={24} xs={12}>
            <Slide direction="left" triggerOnce>
              <Row justify="center" align="middle" className="title">
                <h6>{aboutData?.title}</h6>
              </Row>
              <Row justify={"center"} align={"middle"}>
                <Col lg={18} sm={20} className="text-span">
                  {aboutTextData && <span>{aboutTextData}</span>}
                </Col>
              </Row>
            </Slide>
          </Col>
        </Row>
      </Slide>
    </section>
  );
};

export default withTranslation()(SkillsetBlock);
