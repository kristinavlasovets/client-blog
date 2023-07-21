import { Translation } from '@/app/i18n/client';

export interface LanguageProps {
  lng: keyof Translation;
}

export interface PageProps {
  params: LanguageProps;
}

export interface Author {
  id: number;
  image: string;
  name: string;
  post: string;
  company: string;
  from: string;
  info: string;
  review: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
}
