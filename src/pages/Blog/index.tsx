import React from "react";
import { useParams } from "react-router-dom";
import "./styles.scss";
import AuthorBlock from "../../components/AuthorBlock";
import BlogPostsBlock from "../../components/BlogPostsBlock";
import IFrame from "../../common/IFrame";
import useGetPostInfo from "../../hooks/useGetPostInfo";
import useGetMarkdownFile from "../../hooks/useGetMarkdownFile";
import { Skeleton } from "antd";
import CustomMarkdown from "../../common/Markdown";
import { ArticleJsonLd } from "next-seo";

function createUtterancesContainer(issueTerm: string) {
  const script = document.createElement("script");
  script.src = "https://utteranc.es/client.js";
  script.setAttribute("repo", "pablogonzalezz/pablo-gonzalez-landing-page");
  script.setAttribute("issue-term", issueTerm);
  script.setAttribute("theme", "preferred-color-scheme");
  script.crossOrigin = "anonymous";
  script.async = true;
  document.getElementById("utterances-container")?.appendChild(script);
}

const Blog: React.FC = () => {
  const { filename } = useParams<{ filename: string }>();
  const content = useGetMarkdownFile(filename);
  const postInfo = useGetPostInfo(filename);

  // navigate to top when component is mounted
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // navigate to top when filename changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [filename]);

  // Utterances comments integration
  React.useEffect(() => {
    // Clear previous comments
    if (document.getElementById("utterances-container")?.innerHTML) {
      document.getElementById("utterances-container")!.innerHTML = "";
    }
    createUtterancesContainer(postInfo?.id || "");
  }, [content]);

  // If the content is not loaded yet, show a loading skeleton
  if (!content) {
    return (
      <div className="blog-container">
        <div className="blog-meta">
          <Skeleton active avatar paragraph={{ rows: 2 }} />
        </div>
        <hr className="separator-line" />
        {postInfo?.videoUrl ?
          <Skeleton.Image /> : null}
        <Skeleton active paragraph={{ rows: 10 }} />
        <hr className="separator-line" />
        <BlogPostsBlock title={"Other posts"}></BlogPostsBlock>
      </div>
    );
    // If the post info is not loaded yet, show a not found message
  } else if (!postInfo) {
    return (
      <div className="blog-container">
        <div className="not-found">
          <hr className="separator-line" />
          <h1>Post not found 😔</h1>
          <p>It seems like the post you are looking for does not exist.</p>
          <a href="#/home">Go back to the home page</a>
          <hr className="separator-line" />
        </div>
        <BlogPostsBlock title={"Other posts"}></BlogPostsBlock>
      </div>
    );
  }
  else {
    return (
      <>
        <ArticleJsonLd
          headline={postInfo?.title}
          datePublished={postInfo?.publishDate}
          author={[{
            name: "Pablo Gonzalez",
          }]}
          image={[postInfo?.imageUrl]}
          description={postInfo?.description}
          url={`https://pablomorales.dev/#/blog/${filename}`}
        />
        <article>
          <div className="blog-container">
            <div className="blog-meta">
              <AuthorBlock publishDate={postInfo?.publishDate} />
            </div>
            <hr className="separator-line" />
            {postInfo?.videoUrl ?
              <IFrame src={postInfo?.videoUrl}></IFrame> : null}
            <CustomMarkdown markdown={content} />
            <div id="utterances-container"></div>
            <hr className="separator-line" />
            <BlogPostsBlock title={"Other posts"}></BlogPostsBlock>
          </div>
        </article>
      </>
    );
  }

};

export default Blog;
