import { usePathname } from 'next/navigation';

import en from '@/app/i18n/locales/en/translation.json';
import ru from '@/app/i18n/locales/ru/translation.json';

export interface Translation {
  en: { [key: string]: string };
  ru: { [key: string]: string };
}

const TRANSLATIONS: Translation = { en, ru };

export function useMyTranslation() {
  const router = usePathname();

  let locale: keyof Translation = 'en';
  if (router && router.includes('ru')) locale = 'ru';

  const t = (keyString: string) => TRANSLATIONS[locale][keyString];

  return { t, locale };
}

export const serverTranslation = (lng: keyof Translation) => ({
  t: (keyString: string) => TRANSLATIONS[lng][keyString],
});
