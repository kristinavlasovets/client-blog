import Block from '@/components/Block';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Block> = {
  title: 'Example/Block',
  component: Block,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Block>;

export const LoggedIn: Story = {
  args: {
    lng: 'en',
  },
};

export const LoggedOut: Story = {};
