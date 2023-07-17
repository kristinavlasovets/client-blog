import authors from '@/shared/authors.json';

export const findAuthorById = (authorId: number) => {
  const authorById = authors.find((author) => author.id === authorId)!;
  return authorById;
};
