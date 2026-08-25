import { BlogPost } from "../pages/Blog/types";
import BlogPostContent from "../content/BlogPostsContent.json";

const posts: BlogPost[] = BlogPostContent;

const useGetAllPosts = () => posts;

export default useGetAllPosts;