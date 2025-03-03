import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ErrorMessage } from '../components/ErrorMessage.tsx';

const meta = {
  title: 'Text/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'ErrorMessage의 내용' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '에러메세지는 여기로',
  },
};