import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '../components/Button.tsx';

const meta = {
  title: 'Basic/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color', description: '버튼의 배경컬러' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  args: {
    size: 'Full',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'Large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'Small',
    label: 'Button',
  },
};

export const Xsmall: Story = {
  args: {
    size: 'Xsmall',
    label: 'Button',
  },
};
