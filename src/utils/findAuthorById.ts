import authors from '@/shared/authors.json';
import { Author } from '@/types';

export const findAuthorById = (authorId: number) => {
  const authorById = authors.find((author) => author.id === authorId);
  return authorById as Author;
};
