import TagsSearch from '@/components/TagsSearch';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TagsSearch> = {
  title: 'TagsSearch Component',
  component: TagsSearch,
};

export default meta;
type Story = StoryObj<typeof TagsSearch>;

export const Default: Story = {
  name: 'TagsSearch',
  args: {
    handleChooseTag: () => () => {},
  },
};
