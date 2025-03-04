import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { DefaultTextField } from '../components/DefaultTextField.tsx';

const meta = {
  title: 'TextFields/DefaultTextField',
  component: DefaultTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: '텍스트 필드의 id',
    },
    iconAlt: {
      control: 'text',
      description: '아이콘 이미지의 alt 속성',
    },
    iconPath: {
      control: 'text',
      description: '아이콘 이미지의 경로'
    },
    onIconClick: {
      control: 'clicked',
      description: '버튼 클릭 이벤트'
    },
    placeholder: {
      control: 'text',
      description: '텍스트필드의 placeholder'
    },
    value: {
      control: 'text',
      description: '텍스트필드의 값'
    },
    onChange: {
      control: 'changed',
      description: '텍스트필드 값 변경 이벤트'
    },
    errorMessage: {
      control: 'text',
      description: '텍스트필드의 에러 메시지'
    },
    isError: {
      control: 'boolean',
      description: '에러 상태 여부'
    }
  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

import deleteIcon from "../assets/ic-delete-gray.svg"

export const Default: Story = {
  args: {
    id: "email",
    iconAlt: "icon",
    iconPath: deleteIcon,
    placeholder: "텍스트를 입력해주세요.",
    value: "",
    errorMessage: "텍스트를 확인해주세요",
    isError: false,
  },
};