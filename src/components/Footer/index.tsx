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
      {/* <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:l.qqbadze@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/">{t("Application Security")}</Large>
              <Large to="/">{t("Software Principles")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large to="/">{t("Support Center")}</Large>
              <Large to="/">{t("Customer Support")}</Large>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>Rancho Santa Margarita</Para>
              <Para>2131 Elk Street</Para>
              <Para>California</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              <Large to="/">{t("About")}</Large>
              <Large to="/">{t("Blog")}</Large>
              <Large to="/">{t("Press")}</Large>
              <Large to="/">{t("Careers & Culture")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection> */}

      <Col lg={20} md={24} sm={24} xs={24} className="border-col">
        <Row
          justify="space-between"
          align="middle"
          style={{ margin: "2rem 2rem" }}
        >
          <Col lg={8} md={12} sm={12} xs={12}>
            <Link to="/">
              <Image src="./img/logos/logo.png" className="footer-logo"></Image>
            </Link>
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
