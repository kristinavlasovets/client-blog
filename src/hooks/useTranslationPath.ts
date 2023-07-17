import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

export const useTranslationPath = () => {
  const currentPath = usePathname();
  const translationPath = useMemo(() => currentPath.slice(1, 3), [currentPath]);

  return translationPath;
};
