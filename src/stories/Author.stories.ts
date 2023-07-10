import Author from '@/components/Author';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Author> = {
  title: 'Author Component',
  component: Author,
};

export default meta;
type Story = StoryObj<typeof Author>;

export const Default: Story = {
  name: 'Author',
  args: {
    id: 0,
    image: '/assets/images/authors/0.png',
    name: 'Floyd Miles',
    post: 'Content Writer',
    company: '@Company',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
  },
};
