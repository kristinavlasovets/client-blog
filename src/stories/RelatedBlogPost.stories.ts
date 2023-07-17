import RelatedBlogPost from '@/components/AllPosts/RelatedBlogPosts/RelatedBlogPost';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RelatedBlogPost> = {
  title: 'RelatedBlogPost Component',
  component: RelatedBlogPost,
};

export default meta;
type Story = StoryObj<typeof RelatedBlogPost>;

export const Default: Story = {
  name: 'RelatedBlogPost',
  args: {
    blogPost: {
      id: 0,
      title: 'Step-by-step guide to choosing great font pairs',
      category: 'business',
      authorId: 0,
      createdAt: 'May 23, 2022',
      preview:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      text: '<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p><ul><li>Lorem ipsum dolor sit amet</li><li>Non blandit massa enim nec scelerisque</li><li>Neque egestas congue quisque egestas</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>',
      image: '/assets/images/macbook-man.png',
    },
  },
};
