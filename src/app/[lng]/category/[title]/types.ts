import { LanguageProps } from '@/types';

export interface CategoryPageProps {
  params: LanguageProps & {
    title: string;
  };
}
