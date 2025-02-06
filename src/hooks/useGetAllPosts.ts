import { useEffect, useState } from "react";
import { BlogPost } from "../pages/Blog/types";
import BlogPostContent from "../content/BlogPostsContent.json";

const useGetAllPosts = () => {
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

	return postInfo;
};

export default useGetAllPosts;