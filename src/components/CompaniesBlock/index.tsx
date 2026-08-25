import "./styles.scss";
import CompaniesContent from "../../content/CompaniesContent.json";
import { Company } from "./types";
import Image from "../../common/Image";
import { withTranslation } from "react-i18next";

const CompaniesBlock = () => {
  const companyData: Company[] = CompaniesContent.logos;

  return (
    <section className="scroller-section">
      <div className="scroller-container">
        <div className="scroller">
          {companyData.map((company) => (
            <Image
              src={company.imageUrl}
              alt={company.title}
              className="logo"
              key={company.key}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default withTranslation()(CompaniesBlock);
