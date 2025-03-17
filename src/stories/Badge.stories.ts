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
    size: {
      control: 'radio',
      options: ['Small', 'Large'],
      description: '뱃지의 크기',
    },
    border: {
      control: 'boolean',
      description: '뱃지의 테두리 여부',
    },
  },
  args: {
    onClick: fn(),
    label: '뱃지',
    backgroundColor: '#007bff',
    color: '#fff',
    border: true,
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'Large',
    label: '뱃지',
    backgroundColor: '#EBF1FF',
    color: '#5CA0FF',
    border: false,
  },
};

export const Small: Story = {
  args: {
    size: 'Small',
    label: '뱃지',
    backgroundColor: '#FFC8C7',
    color: '#FF7170',
    border: false,
  },
};

export const Border: Story = {
  args: {
    size: 'Large',
    label: 'Border',
    backgroundColor: 'transparent',
    color: '#BFBFBF',
    border: true,
  },
};
