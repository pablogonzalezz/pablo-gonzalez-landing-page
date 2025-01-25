import { useEffect, useState } from "react";
import { BlogPostsBlockProps } from "./types";
import { BlogPost } from "../../pages/Blog/types";
import BlogPostContent from "../../content/BlogPostsContent.json";
import "./styles.scss";
import Image from "../../common/Image";
import { Badge, Card, Col, Row } from "antd";
import { Slide } from "react-awesome-reveal";

const BlogPostsBlock = ({ title, isHomePage }: BlogPostsBlockProps) => {
  const [postInfo, setPostInfo] = useState<BlogPost[]>();

  useEffect(() => {
    const loadPostInfo = async () => {
      try {
        setPostInfo(BlogPostContent);
        if (isHomePage) {
          setPostInfo(BlogPostContent.slice(0, 4));
        }
      } catch (error) {
        console.error("Error loading post info:", error);
      }
    };
    loadPostInfo();
  }, []);

  if (!isHomePage) {
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
  } else {
    return (
      <section id="blog" className="blog-section">
        <Slide direction="right" triggerOnce>
          <Row align={"middle"} justify={"center"}>
            <Col>
              <Slide direction="left" triggerOnce>
                <Row justify="center" align="middle" className="title">
                  <h6>{title}</h6>
                </Row>
                <Row justify={"center"} align={"middle"}>
                  {postInfo?.map((post: BlogPost, index: number) => (
                    <Col lg={6} md={12} sm={12} xs={24} className="post-card" key={index}>
                      <Badge.Ribbon text={"New"} color="blue" className={post.isNew ? "ribbon" : "ribbon hidden"} placement="start">
                        <Card className="home-posts" hoverable cover={<Image src={post.imageUrl} key={index} className="home-page-thumbnail"></Image>}>
                          <a href={`#/blog/${post.id}`}>
                            <p>{post.title}</p>
                            <span>{post.description}</span>
                          </a>
                        </Card>
                      </Badge.Ribbon>
                    </Col>
                  ))}
                </Row>
              </Slide>
            </Col>
          </Row>
        </Slide>
      </section>
    );
  }
};

export default BlogPostsBlock;
