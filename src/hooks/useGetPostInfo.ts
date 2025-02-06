import { useEffect, useState } from "react";
import { BlogPost } from "../pages/Blog/types";
import useGetAllPosts from "./useGetAllPosts";

const useGetPostInfo = (postId: string) => {
  const [postInfo, setPostInfo] = useState<BlogPost>();
  const allPostInfo = useGetAllPosts();

  useEffect(() => {
    const loadPostInfo = async () => {
      try {
        const postInfo = allPostInfo?.find((post: any) => post.id === postId);
        setPostInfo(postInfo);
        document.title = postInfo?.title || "Blog Post";
      } catch (error) {
        console.error("Error loading post info:", error);
      }
    };

    if (postId) {
      loadPostInfo();
    }
  }, [postId, allPostInfo]);

  return postInfo;
}

export default useGetPostInfo;