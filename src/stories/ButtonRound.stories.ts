import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import {ButtonRound} from "../components/ButtonRound.tsx";

const meta = {
  title: 'Buttons/ButtonRound',
  component: ButtonRound,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isDisabled : {
      control: "boolean",
      description: "버튼의 활성화 여부",
    },
    isPressed :  {
      control: "boolean",
      description: "버튼이 눌렸을떄의 동작"
    },
    label : {
      control: "text",
      description: "버튼의 라벨"
    },
    onClick : {
      control: "action",
      description: "버튼 클릭 이벤트"
    }
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonRound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isPressed: false,
    isDisabled: true,
    label: '텍스트',
  },
};