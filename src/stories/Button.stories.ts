import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '../components/Button.tsx';

const meta = {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['Large', 'Small', 'Xsmall'],
      description: '버튼의 크기',
    },
    isDisabled: {
      control: 'boolean',
      description: '버튼이 비활성화 되었는지 여부',
    },
    label: {
      control: 'text',
      description: '버튼의 텍스트 라벨',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'Large',
    label: '버튼',
  },
};

export const Small: Story = {
  args: {
    size: 'Small',
    label: '버튼',
  },
};

export const Xsmall: Story = {
  args: {
    size: 'Xsmall',
    label: '버튼',
  },
};
