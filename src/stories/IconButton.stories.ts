import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { IconButton } from '../components/IconButton.tsx';

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    alt: {
      control: 'text',
      description: '이미지의 alt 속성',
      defaultValue: ""
    },
    iconPath: {
      control: 'text',
      description: '이미지의 경로'
    },
    onClick: {
      control: 'clicked',
      description: '버튼 클릭 이벤트'
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

import deleteIcon from "../assets/icon/ic-delete-gray.svg"

export const Default: Story = {
  args: {
    alt: "icon",
    iconPath: deleteIcon
  },
};