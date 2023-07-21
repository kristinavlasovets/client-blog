import { LanguageProps } from '@/types';

export interface SearchBlockProps extends LanguageProps {
  currentCategory: string;
  handleChooseTag: (tag: string) => () => void;
}
