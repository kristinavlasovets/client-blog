import CategoriesListItem from '@/components/CategoriesListItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CategoriesListItem> = {
  title: 'CategoriesListItem Component',
  component: CategoriesListItem,
};

export default meta;
type Story = StoryObj<typeof CategoriesListItem>;

export const Default: Story = {
  name: 'CategoriesListItem',
  args: {
    category: {
      title: 'Business',
      icon: '/assets/icons/business.svg',
    },
  },
};
