import React, { FC } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import AuthorHeader from '@/components/AuthorHeader';
import Posts from '@/components/Posts';
import authors from '@/shared/authors.json';
import posts from '@/shared/posts.json';

import { AuthorPageProps } from './types';

import styles from './styles.module.scss';

const Author: FC<AuthorPageProps> = ({ params: { lng, id } }) => {
  const { t } = serverTranslation(lng);

  const { name, image, facebook, instagram, linkedin, twitter, review } = authors.find(
    (author) => author.id === +id
  )!;

  const postsByAuthor = posts.filter(({ authorId }) => authorId === +id);

  return (
    <div className={styles.wrapper}>
      <AuthorHeader
        lng={lng}
        name={name}
        image={image}
        review={review}
        linkedin={linkedin}
        twitter={twitter}
        facebook={facebook}
        instagram={instagram}
      />
      <Posts lng={lng} posts={postsByAuthor} postsTitle={t('Author.title')} />
    </div>
  );
};
export default Author;
