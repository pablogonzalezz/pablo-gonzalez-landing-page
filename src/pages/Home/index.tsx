import { lazy } from "react";
import BlogPostsBlock from "../../components/BlogPostsBlock";

const Container = lazy(() => import("../../common/Container"));
const Intro = lazy(() => import("../../components/VideoBlock"));
const CompaniesBlock = lazy(() => import("../../components/CompaniesBlock"));
const AboutBlock = lazy(() => import("../../components/AboutBlock"));
const SkillsetBlock = lazy(() => import("../../components/SkillsetBlock"));
const CollapseBlock = lazy(() => import("../../components/CollapseBlock"));
const QuoteBlock = lazy(() => import("../../components/QuoteBlock"));
const Contact = lazy(() => import("../../components/ContactForm"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <Intro />
      <CompaniesBlock />
      <AboutBlock />
      <SkillsetBlock />
      <CollapseBlock />
      <BlogPostsBlock title="My recent posts" isHomePage />
      {/* <QuoteBlock /> */}
      <Contact />
    </Container>
  );
};

export default Home;
