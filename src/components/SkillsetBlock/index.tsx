import { Row, Col, Card, Spin } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import Meta from "antd/lib/card/Meta";
import { Suspense, useEffect, useState } from "react";
import SkillsetContent from "../../content/SkillsetContent.json";
import { Skillset } from "./types";
import "./styles.scss";

const SkillsetBlock = () => {
  const [skillsetData, setSkillsetData] = useState<Skillset[]>([]);

  useEffect(() => {
    setSkillsetData(SkillsetContent.skillsets);
  }, []);

  return (
    <section id="skillset">
      <Row align={"middle"} justify={"center"}>
        <Col xl={24} lg={20} md={24} xs={12}>
          <Slide direction="left" triggerOnce>
            <Row justify="center" align="middle" className="title">
              <h6>My Skillset</h6>
            </Row>
            <Row justify="center" align="middle" gutter={[16, 16]} wrap>
              {skillsetData?.map((skillset) => (
                <Col lg={6} sm={12} md={6} className="card-col">
                  <Suspense fallback={<Spin spinning={true}></Spin>}>
                    <Card
                      bordered={false}
                      className="card"
                      cover={<img alt={skillset.alt} src={skillset.imageUrl} />}
                    >
                      <Meta
                        title={skillset.title}
                        description={skillset.description}
                        className="meta"
                      />
                    </Card>
                  </Suspense>
                </Col>
              ))}
            </Row>
          </Slide>
        </Col>
      </Row>
    </section>
  );
};

export default withTranslation()(SkillsetBlock);
