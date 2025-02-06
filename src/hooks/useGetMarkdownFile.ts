import { useEffect, useState } from "react";

const useGetMarkdownFile = (path: string) => {
  const [content, setContent] = useState<string>("");
  useEffect(() => {
    const fetchMarkdownFile = async (filename: string): Promise<string> => {
      const response = await fetch(`markdown/${filename}.md`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    };
    const loadMarkdown = async () => {
      try {
        const markdownContent = await fetchMarkdownFile(path);
        setContent(markdownContent);
      } catch (error) {
        console.error("Error loading markdown file:", error);
        setContent("# Error\nCould not load the blog post.");
      }
    };
    if (path) {
      loadMarkdown();
    }
  }, [path]);
  return content;
};

export default useGetMarkdownFile;