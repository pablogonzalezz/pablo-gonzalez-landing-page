import { Row, Col, Card, Collapse, CollapseProps, Avatar } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import QuoteContent from "../../content/QuoteContent.json";
import "./styles.scss";
import { Quote } from "./types";

const QuoteBlock = ({}) => {
  const [quoteData, setQuoteData] = useState<Quote[]>([]);

  useEffect(() => {
    setQuoteData(QuoteContent.quotes);
  }, []);

  return (
    <section id="testimonials">
      <Slide
        direction="left"
        triggerOnce
        style={{ display: "flex", alignItems: "center" }}
      >
        <Row
          justify="center"
          align="middle"
          style={{ marginTop: "5rem", marginBottom: "5rem" }}
          gutter={[0, 100]}
        >
          <Col xxl={12} xl={14} lg={20} md={20} sm={12} xs={12}>
            <Row gutter={[0, 100]} justify="start">
              {quoteData?.map((quote) => (
                <Row justify="center" align="middle">
                  <Col lg={8}>
                    <Avatar src={quote.imageUrl} size={180} />
                  </Col>
                  <Col lg={12}>
                    <Row>
                      <Col lg={24} style={{ textAlign: "left" }}>
                        <Row>
                          <span
                            style={{
                              fontSize: "100px",
                              fontFamily: "fantasy",
                              lineHeight: "10px",
                            }}
                          >
                            "
                          </span>
                        </Row>
                        <Col lg={24}>
                          <span className="quote-content">{quote.content}</span>
                          <Row gutter={4}>
                            <Col>
                              <strong>- {quote.author}.</strong>
                            </Col>
                            <Col>
                              <span>{quote.role}</span>
                            </Col>
                          </Row>
                        </Col>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ))}
            </Row>
          </Col>
          <Col xl={6} md={22} xs={14} lg={18} style={{ textAlign: "center" }}>
            <h6>Testimonials from my co-workers</h6>
          </Col>
        </Row>
      </Slide>
    </section>
  );
};

export default withTranslation()(QuoteBlock);
