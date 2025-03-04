import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Badge } from '../components/Badge.tsx';

const meta = {
  title: 'Badges/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color', description: '뱃지의 배경컬러' },
    color: { control: 'color', description: '뱃지의 폰트컬러' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'Large',
    label: 'Badge',
  },
};

export const Small: Story = {
  args: {
    size: 'Small',
    label: 'Badge',
  },
};
