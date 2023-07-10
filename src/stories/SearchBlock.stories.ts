import SearchBlock from '@/components/SearchBlock';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SearchBlock> = {
  title: 'SearchBlock Component',
  component: SearchBlock,
};

export default meta;
type Story = StoryObj<typeof SearchBlock>;

export const Default: Story = {
  name: 'SearchBlock',
  argTypes: { handleChooseTag: { action: 'clicked' } },
  args: {
    handleChooseTag: () => () => {},
    currentCategory: 'Business',
    lng: 'en',
  },
};
