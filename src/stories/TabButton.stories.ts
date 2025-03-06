import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TabButton } from '../components/TabButton.tsx';

const meta = {
  title: 'Buttons/TabButton',
  component: TabButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '버튼의 텍스트',
    },
    isChecked: {
      control: 'boolean',
      description: '버튼 활성화여부'
    },
    onClick: {
      control: 'clicked',
      description: '버튼 클릭 이벤트'
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TabButton>;

export default meta;
type Story = StoryObj<typeof meta>;

import deleteIcon from "../assets/icon/ic-delete-gray.svg"

export const Default: Story = {
  args: {
    children: "Tab",
    isChecked: false
  },
};