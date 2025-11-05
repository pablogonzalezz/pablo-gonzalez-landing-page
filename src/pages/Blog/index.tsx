import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./styles.scss";
import AuthorBlock from "../../components/AuthorBlock";
import BlogPostsBlock from "../../components/BlogPostsBlock";
import IFrame from "../../common/IFrame";
import useGetPostInfo from "../../hooks/useGetPostInfo";
import useGetMarkdownFile from "../../hooks/useGetMarkdownFile";
import { Skeleton } from "antd";

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
      <div className="blog-container">
        <div className="blog-meta">
          <AuthorBlock publishDate={postInfo?.publishDate} />
        </div>
        <hr className="separator-line" />
        {postInfo?.videoUrl ?
          <IFrame src={postInfo?.videoUrl}></IFrame> : null}
        <ReactMarkdown>{content}</ReactMarkdown>
        <hr className="separator-line" />
        <BlogPostsBlock title={"Other posts"}></BlogPostsBlock>
      </div>
    );
  }

};

export default Blog;
