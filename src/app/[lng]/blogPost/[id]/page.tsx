import React, { FC } from 'react';

import BlogPostItem from '@/components/AllPosts/BlogPostItem';
import RelatedBlogPosts from '@/components/AllPosts/RelatedBlogPosts';
import JoinOurTeam from '@/components/JoinOurTeam';
import posts from '@/shared/posts.json';

import { BlogPostPageProps } from './types';

import styles from './styles.module.scss';

const BlogPost: FC<BlogPostPageProps> = ({ params: { lng, id } }) => {
  const currentBlogPost = posts.filter((blogPost) => blogPost.id === Number(id))[0];

  return (
    <div className={styles.wrapper}>
      <BlogPostItem blogPost={currentBlogPost} />
      <RelatedBlogPosts
        category={currentBlogPost.category}
        blogPostId={currentBlogPost.id}
        lng={lng}
      />
      <JoinOurTeam lng={lng} />
    </div>
  );
};
export default BlogPost;
