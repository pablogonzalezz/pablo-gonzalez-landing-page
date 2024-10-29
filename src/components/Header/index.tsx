import { useEffect, useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import "./styles.scss";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import Image from "../../common/Image";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 70) {
      setHeaderVisible(true);
    } else {
      setHeaderVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor, true);
  }, []);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <div className="customNavLinkSmall" onClick={() => scrollTo("about")}>
          <span className="span">{t("About")}</span>
        </div>
        <div
          className="customNavLinkSmall"
          onClick={() => scrollTo("skillset")}
        >
          <span className="span">{t("Skillset")}</span>
        </div>
        <div
          className="customNavLinkSmall"
          onClick={() => scrollTo("performance")}
        >
          <span className="span">{t("Performance")}</span>
        </div>
        <div
          className="customNavLinkSmall"
          onClick={() => scrollTo("testimonials")}
        >
          <span className="span">{t("Testimonials")}</span>
        </div>
        <div
          className="customNavLinkSmall"
          style={{ width: "180px", marginTop: "0px" }}
          onClick={() => scrollTo("contact")}
        >
          <span className="span">
            <Button>{t("Contact")}</Button>
          </span>
        </div>
      </>
    );
  };

  return (
    <header className={headerVisible ? "header active" : "header"}>
      <Row justify="center" align="middle">
        <Col lg={20} md={24} sm={24} xs={24}>
          <Row justify="space-between" align="middle">
            <Col>
              <Link to="/" aria-label="homepage" className="logo-container">
                <Image src="img/logos/logo.png" key={1}></Image>
              </Link>
            </Col>
            <Col>
              <div className="not-hidden">
                <MenuItem />
              </div>
            </Col>
            <div className="burger" onClick={toggleButton}>
              <MenuOutlined className="outline" />
            </div>
          </Row>
          <Drawer open={visible} onClose={toggleButton}>
            <Col style={{ marginBottom: "2.5rem", zIndex: 9999999 }}>
              <span className="label" onClick={toggleButton}>
                <Col span={12}>
                  <h5 className="menu">Menu</h5>
                </Col>
              </span>
            </Col>
            <MenuItem />
          </Drawer>
        </Col>
      </Row>
    </header>
  );
};

export default withTranslation()(Header);
