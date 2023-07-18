import Map from '@/components/Map';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Map> = {
  title: 'Map Component',
  component: Map,
};

export default meta;
type Story = StoryObj<typeof Map>;

export const Default: Story = {
  name: 'Map',
};
