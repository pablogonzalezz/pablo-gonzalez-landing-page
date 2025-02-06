export interface BlogPost {
  id: string;
  title: string;
  publishDate: string;
  description: string;
  imageUrl: string;
  isNew?: boolean;
  videoUrl?: string;
}
