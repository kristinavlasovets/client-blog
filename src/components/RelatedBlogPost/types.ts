import { LanguageProps } from '@/types';

import { BlogPost } from '../BlogPostItem/types';

export interface RelatedBlogPostProps extends LanguageProps {
  blogPost: BlogPost;
}
