import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { DefaultSearchBox } from '../components/DefaultSearchBox.tsx';

const meta = {
  title: 'SearchBox/DefaultSearchBox',
  component: DefaultSearchBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: '검색 필드의 id',
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
      description: '검색 필드의 placeholder'
    },
    value: {
      control: 'text',
      description: '검색 필드의 값'
    },
    onChange: {
      control: 'changed',
      description: '검색 필드 값 변경 이벤트'
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof DefaultSearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

import deleteIcon from "../assets/icon/ic-search-navy.svg"

export const Default: Story = {
  args: {
    id: "email",
    iconAlt: "icon",
    iconPath: deleteIcon,
    placeholder: "텍스트를 입력해주세요.",
    value: "",
  },
};