import { GithubFilled, LinkedinFilled, YoutubeFilled } from "@ant-design/icons";
import { Popover } from "antd";
import { withTranslation } from "react-i18next";
import "./styles.scss";

const AuthorBlock = ({publishDate}: any) => {
  return (
    <Popover
      overlayStyle={{ width: 300 }}
      content={
        <div>
          <img src="img/author.jpg" alt="Author" className="author-picture" />
          <br></br>
          <strong>Pablo Gonzalez</strong>
          <br></br>
          <span>
            Frontend Engineer. Apaixonado por desenvolvimento de interfaces
            limpas e intuitivas.
          </span>
          <br></br>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/pablogonzalezzz/">
              <LinkedinFilled />
            </a>
            <a href="https://www.youtube.com/@PabloGonzalez_dev">
              <YoutubeFilled />
            </a>
            <a href="https://github.com/pablogonzalezz">
              <GithubFilled />
            </a>
          </div>
        </div>
      }
    >
      <img src="img/author.jpg" alt="Author" className="author-picture" />
      <div className="author-info">
        <p className="author-name">Pablo Gonzalez</p>
        <p className="publish-date">Published on {publishDate}</p>
      </div>
    </Popover>
  );
};

export default withTranslation()(AuthorBlock);
