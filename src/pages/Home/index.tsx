import { lazy, useEffect } from "react";
import BlogPostsBlock from "../../components/BlogPostsBlock";
import Container from "../../common/Container";
import Intro from "../../components/VideoBlock";
import CompaniesBlock from "../../components/CompaniesBlock";
import AboutBlock from "../../components/AboutBlock";
import ScrollToTop from "../../common/ScrollToTop";

const SkillsetBlock = lazy(() => import("../../components/SkillsetBlock"));
const CollapseBlock = lazy(() => import("../../components/CollapseBlock"));
const Contact = lazy(() => import("../../components/ContactForm"));

const Home = () => {
  // scroll to top when the component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <ScrollToTop />
      <Intro />
      <CompaniesBlock />
      <AboutBlock />
      <SkillsetBlock />
      <CollapseBlock />
      <BlogPostsBlock title="My recent posts" isHomePage />
      <Contact />
    </Container>
  );
};

export default Home;
