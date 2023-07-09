import { LanguageProps } from '@/types';

export interface BlogPostPreviewProps extends LanguageProps {
  post: { id: number; createdAt: string; authorId: number; title: string };
}
