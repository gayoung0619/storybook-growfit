import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { DefaultTextArea } from '../components/DefaultTextArea.tsx';

const meta = {
  title: 'TextArea/DefaultTextArea',
  component: DefaultTextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: '다중텍스트 영역의 id',
    },
    name: {
      control: 'text',
      description: '다중텍스트 영역의 name',
    },
    placeholder: {
      control: 'text',
      description: '다중텍스트 영역의 placeholder'
    },
    value: {
      control: 'text',
      description: '다중텍스트 영역의 값'
    },
    onChange: {
      control: 'changed',
      description: '다중텍스트 영역의 값 변경 이벤트'
    },
    isError: {
      control: 'boolean',
      description: '에러 상태 여부'
    }
  },
  args: { onClick: fn() },
} satisfies Meta<typeof DefaultTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "email",
    name: "email",
    placeholder: "텍스트를 입력해주세요.",
    value: "",
    isError: false,
    count: "0",
    limit: "100",
  },
};