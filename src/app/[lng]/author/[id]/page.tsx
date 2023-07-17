'use client';

import React, { FC, useMemo } from 'react';

import { useMyTranslation } from '@/app/i18n/client';
import Posts from '@/components/AllPosts/Posts';
import AuthorHeader from '@/components/Headers/AuthorHeader';
import posts from '@/shared/posts.json';
import { findAuthorById } from '@/utils/findAuthorById';

import { AuthorPageProps } from './types';

import styles from './styles.module.scss';

const Author: FC<AuthorPageProps> = ({ params: { lng, id } }) => {
  const { t } = useMyTranslation();

  const { name, image, review, linkedin, twitter, facebook, instagram } = useMemo(
    () => findAuthorById(Number(id)),
    [id]
  );

  const postsByAuthor = posts.filter(({ authorId }) => authorId === Number(id));

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
