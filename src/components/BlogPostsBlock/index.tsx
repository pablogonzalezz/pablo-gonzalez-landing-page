import { useEffect, useState } from "react";
import { BlogPostsBlockProps } from "./types";
import { BlogPost } from "../../pages/Blog/types";
import BlogPostContent from "../../content/BlogPostsContent.json";
import "./styles.scss";
import Image from "../../common/Image";

const BlogPostsBlock = ({ title }: BlogPostsBlockProps) => {
  const [postInfo, setPostInfo] = useState<BlogPost[]>();

  useEffect(() => {
    const loadPostInfo = async () => {
      try {
        setPostInfo(BlogPostContent);
      } catch (error) {
        console.error("Error loading post info:", error);
      }
    };
    loadPostInfo();
  }, []);

  return (
    <div className="other-posts">
      <h2>{title}</h2>
      <ul className="post-list">
        {postInfo?.map((post: BlogPost, index: number) => (
          <li key={post.id} className="post-item">
            <Image src={post.imageUrl} key={index} className="thumbnail"></Image>
            <div className="post-info">
              <a href={`#/blog/${post.id}`}><h3 className="post-title">{post.title}</h3></a>
              <p className="post-description">
                {post.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostsBlock;
