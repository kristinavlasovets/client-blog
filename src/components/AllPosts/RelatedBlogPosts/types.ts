import { LanguageProps } from '@/types';

export interface RelatedBlogPostsProps extends LanguageProps {
  blogPostId: number;
  category: string;
}
