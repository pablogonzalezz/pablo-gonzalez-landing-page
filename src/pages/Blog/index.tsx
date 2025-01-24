import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./styles.scss";
import AuthorBlock from "../../components/AuthorBlock";
import { BlogPost } from "./types";
import BlogPostContent from "../../content/BlogPostsContent.json";
import BlogPostsBlock from "../../components/BlogPostsBlock";

const fetchMarkdownFile = async (filename: string): Promise<string> => {
  const response = await fetch(`markdown/${filename}.md`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.text();
};

const Blog: React.FC = () => {
  const { filename } = useParams<{ filename: string }>();
  const [content, setContent] = useState<string>("");
  const [postInfo, setPostInfo] = useState<BlogPost>();

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const markdownContent = await fetchMarkdownFile(filename);
        setContent(markdownContent);
      } catch (error) {
        console.error("Error loading markdown file:", error);
        setContent("# Error\nCould not load the blog post.");
      }
    };

    if (filename) {
      loadMarkdown();
    }
  }, [filename]);

  useEffect(() => {
    const loadPostInfo = async () => {
      try {
        const allPostInfo: BlogPost[] = BlogPostContent;
        const postInfo = allPostInfo.find((post: any) => post.id === filename);
        setPostInfo(postInfo);
      } catch (error) {
        console.error("Error loading post info:", error);
      }
    };

    if (filename) {
      loadPostInfo();
    }
  }, [filename]);

  return (
    <div className="blog-container">
      <div className="blog-meta">
        <AuthorBlock publishDate={postInfo?.publishDate} />
      </div>
      <hr className="separator-line" />
      <ReactMarkdown>{content}</ReactMarkdown>
      <hr className="separator-line" />
      <BlogPostsBlock title={"Other posts"}></BlogPostsBlock>
    </div>
  );
};

export default Blog;
