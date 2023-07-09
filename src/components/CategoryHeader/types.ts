import { LanguageProps } from '@/types';

export interface CategoryHeaderProps extends LanguageProps {
  category: {
    title: string;
    info: string;
  };
}
