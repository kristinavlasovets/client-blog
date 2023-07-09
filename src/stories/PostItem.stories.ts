import PostItem from '@/components/PostItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PostItem> = {
  title: 'Component',
  component: PostItem,
};

export default meta;
type Story = StoryObj<typeof PostItem>;

export const Default: Story = {
  args: {
    category: 'economy',
    id: 1,
    image: '/public/assets/images/macbook-man.png',
    preview: 'Lorem',
    title: 'Title',
  },
};
