import AboutTeam from '@/components/AboutTeam';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AboutTeam> = {
  title: 'AboutTeam Component ',
  component: AboutTeam,
};

export default meta;
type Story = StoryObj<typeof AboutTeam>;

export const Default: Story = {
  name: 'AboutTeam',
  args: {
    variant: 'left',
    title: 'Why we started this blog',
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    alt: 'Our team',
    src: '/asssets/images/on-stairs.png',
  },
};
