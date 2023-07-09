import { LanguageProps } from '@/types';

export interface Post {
  id: number;
  title: string;
  category: string;
  preview: string;
  image: string;
}

export interface PostsProps extends LanguageProps {
  postsTitle?: string;
  posts: Post[];
}
