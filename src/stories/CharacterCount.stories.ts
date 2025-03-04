import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CharacterCount } from '../components/CharacterCount.tsx';

const meta = {
  title: 'Text/CharacterCount',
  component: CharacterCount,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'text', description: '다중텍스트의 입력 글자수'},
    limit: { control: 'text', description: '다중텍스트의 최대 글자수' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof CharacterCount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: "0",
    limit: "100",
  },
};