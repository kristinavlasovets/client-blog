import { LanguageProps } from '@/types';

export interface BlogPostPageProps {
  params: LanguageProps & {
    id: number;
  };
}
