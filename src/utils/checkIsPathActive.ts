import { translationPathRegExp } from '@/constants';

export const checkIsPathActive = (pathName: string, path: string) => {
  const isActive = pathName.replace(translationPathRegExp, '') === path;
  return isActive;
};
