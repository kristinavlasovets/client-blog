import Carousel from '@/components/Testimonials/Carousel';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Carousel> = {
  title: 'Carousel Component',
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  name: 'Carousel',
};
