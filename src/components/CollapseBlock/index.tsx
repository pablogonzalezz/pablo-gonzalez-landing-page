import { Row, Col, Card, Collapse, CollapseProps } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import TechnologyContent from "../../content/TechnologyContent.json";
import { Technology } from "./types";
import CollapsePanel from "antd/lib/collapse/CollapsePanel";
import { CodeBlock, dracula } from "react-code-blocks";
import "./styles.scss";

const CollapseBlock = ({}) => {
  const [technologyData, setTechnologyData] = useState<Technology[]>([]);

  useEffect(() => {
    setTechnologyData(TechnologyContent.technologies);
  }, []);

  return (
    <section className="collapse-section" id="performance">
      <Slide
        direction="right"
        triggerOnce
      >
        <Row
          justify="center"
          align="middle"
          gutter={[50, 50]}
        >
          <Col xl={12} md={12} xs={24}>
            <h6>Performance Matters 🚀</h6>
          </Col>
          <Col xl={10} lg={10} md={10} xs={20}>
            <Row justify="center" align="middle">
              <Collapse
                defaultActiveKey={["1"]}
                accordion={true}
                className="collapse"
              >
                {technologyData?.map((technology) => (
                  <CollapsePanel
                    header={technology.title}
                    key={technology.key}
                  >
                    {technology.description}
                    {technology?.code && (
                      <CodeBlock
                        text={technology.code}
                        language={"javascript"}
                        theme={dracula}
                        showLineNumbers={true}
                      />
                    )}
                  </CollapsePanel>
                ))}
              </Collapse>
            </Row>
          </Col>
        </Row>
      </Slide>
    </section>
  );
};

export default withTranslation()(CollapseBlock);
