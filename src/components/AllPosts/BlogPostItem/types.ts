export interface BlogPost {
  id: number;
  title: string;
  authorId: number;
  category: string;
  preview: string;
  image: string;
  createdAt: string;
  text: string;
}

export interface BlogPostItemProps {
  blogPost: BlogPost;
}
