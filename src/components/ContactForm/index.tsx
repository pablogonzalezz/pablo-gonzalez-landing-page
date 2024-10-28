import { Row, Col, Spin } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import "./styles.scss";
import { Suspense, useEffect, useState } from "react";
import ContactContent from "../../content/ContactContent.json";

const Contact = () => {
  const { values, errors, handleChange, handleSubmit, isLoading } =
    useForm(validate);
  const [contactData, setContactData] = useState<{ title: string }>();

  useEffect(() => {
    setContactData(ContactContent);
  }, []);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <span className="error-message">{ErrorMessage}</span>;
  };

  return (
    <section id="contact" className="contact-section">
      <Row justify="center" align="middle" gutter={120} className="contact-row">
        <Col xl={8} lg={10} md={24} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <h6>{contactData?.title}</h6>
          </Slide>
        </Col>
        <Col xl={8} lg={10} md={24} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <Spin spinning={isLoading}>
              <form
                className="contact-form"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Col className="input-col">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={values.name || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="name" />
                </Col>
                <Col className="input-col">
                  <Input
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    value={values.email || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="email" />
                </Col>
                <Col className="input-col">
                  <TextArea
                    placeholder="Your Message"
                    value={values.message || ""}
                    name="message"
                    onChange={handleChange}
                  />
                  <ValidationType type="message" />
                </Col>
                <Row justify="center" align="middle">
                  <Button name="submit">{"Submit"}</Button>
                </Row>
              </form>
            </Spin>
          </Slide>
        </Col>
      </Row>
    </section>
  );
};

export default withTranslation()(Contact);
