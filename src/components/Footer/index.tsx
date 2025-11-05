import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import "./styles.scss";
import Image from "../../common/Image";
import { Link } from "react-router-dom";
import { Button } from "../../common/Button";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = () => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <section className="section">
      <Col lg={20} md={24} sm={24} xs={24} className="border-col">
        <Row
          justify="space-between"
          align="middle"
          style={{ margin: "2rem 2rem" }}
        >
          <Col lg={8} md={12} sm={12} xs={12}>
          <a href="/#/home" aria-label="homepage">
            <Image src="img/logos/logo.png" className="footer-logo" key={1}></Image>
          </a>        
          </Col>
          <Col lg={8} md={12} sm={12} xs={12}>
            <span>Made with ❤️ by Pablo Gonzalez</span>
          </Col>
          <Col lg={8} md={24} sm={24} xs={24}>
            <Row
              className="footer-container"
              align={"middle"}
              justify={"space-evenly"}
            >
              <SocialLink
                href="https://github.com/pablogonzalezz/"
                src="github.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/pablogonzalezzz/"
                src="linkedin.svg"
              />
              <Button link="https://api.whatsapp.com/send/?phone=%2B351911930873&text&type=phone_number&app_absent=0">
                Let's chat!
              </Button>
            </Row>
          </Col>
        </Row>
      </Col>
    </section>
  );
};

export default withTranslation()(Footer);
