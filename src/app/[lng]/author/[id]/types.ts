import { LanguageProps } from '@/types';

export interface AuthorPageProps {
  params: LanguageProps & {
    id: number;
  };
}
