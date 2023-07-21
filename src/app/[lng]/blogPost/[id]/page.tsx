'use client';

import React, { FC, useMemo } from 'react';

import BlogPostItem from '@/components/AllPosts/BlogPostItem';
import RelatedBlogPosts from '@/components/AllPosts/RelatedBlogPosts';
import JoinOurTeam from '@/components/JoinOurTeam';
import Layout from '@/components/Layout';
import posts from '@/shared/posts.json';

import { BlogPostPageProps } from './types';

const BlogPost: FC<BlogPostPageProps> = ({ params: { lng, id } }) => {
  const currentBlogPost = useMemo(
    () => posts.filter((blogPost) => blogPost.id === Number(id))[0],
    [id]
  );

  return (
    <div>
      <Layout>
        <BlogPostItem blogPost={currentBlogPost} />
        <RelatedBlogPosts
          category={currentBlogPost.category}
          blogPostId={currentBlogPost.id}
          lng={lng}
        />
      </Layout>
      <JoinOurTeam lng={lng} />
    </div>
  );
};
export default BlogPost;
