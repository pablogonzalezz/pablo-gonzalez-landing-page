import { Row, Col, Spin } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Suspense, useEffect, useState } from "react";
import CompaniesContent from "../../content/CompaniesContent.json";
import "./styles.scss";
import { Company } from "./types";
import Image from "../../common/Image";

const CompaniesBlock = ({}) => {
  const [companyData, setCompanyData] = useState<Company[]>([]);

  useEffect(() => {
    setCompanyData(CompaniesContent.logos);
  }, []);

  return (
    <section className="scroller-section">
      <div className="scroller-container">
        <div className="scroller">
          {companyData.map((company) => (
            <Image src={company.imageUrl} className="logo" key={company.key}></Image>
          ))}
        </div>
      </div>
    </section>
  );
};

export default withTranslation()(CompaniesBlock);
