import { useEffect, useState } from "react";
import { Row, Col, Drawer, Switch } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Button } from "../../common/Button";
import "./styles.scss";
import { useLocation } from "react-router-dom";
import { MenuOutlined, MoonFilled, SunFilled, SunOutlined } from "@ant-design/icons";
import Image from "../../common/Image";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const isBlog: boolean = useLocation().hash.includes("#/blog");

  const changeBackgroundColor = () => {
    if (window.scrollY > 70) {
      setHeaderVisible(true);
    } else {
      setHeaderVisible(false);
    }
  };

  const toggleDarkTheme = (checked: boolean) => {
    setDarkTheme(checked);
  }

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkTheme]);

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
          <span className={isBlog ? "hidden" : "span"}>{t("About")}</span>
        </div>
        <div
          className="customNavLinkSmall"
          onClick={() => scrollTo("skillset")}
        >
          <span className={isBlog ? "hidden" : "span"}>{t("Skillset")}</span>
        </div>
        <div
          className="customNavLinkSmall"
          onClick={() => scrollTo("performance")}
        >
          <span className={isBlog ? "hidden" : "span"}>{t("Performance")}</span>
        </div>
        <div
          className="customNavLinkSmall"
          onClick={() => scrollTo("blog")}
        >
          <span className={isBlog ? "hidden" : "span"}>{t("Blog")}</span>
        </div>
        <Switch onChange={toggleDarkTheme} checked={darkTheme} className="customNavLinkSmall"
          checkedChildren={<MoonFilled  style={{color: "black"}}  />}
          unCheckedChildren={<SunFilled style={{color: "white"}}/>}
        />  
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
              <a href="/#/home" aria-label="homepage" className="logo-container">
                <Image src="img/logos/logo.png" key={1}></Image>
              </a>
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
