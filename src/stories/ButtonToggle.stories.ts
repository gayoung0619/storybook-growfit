import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import {ButtonToggle} from "../components/ButtonToggle.tsx";

const meta = {
  title: 'Buttons/ButtonToggle',
  component: ButtonToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOn : {
      control: "boolean",
      description: "버튼의 활성화 여부",
    },
    onClick : {
      control: "action",
      description: "버튼 클릭 이벤트"
    }
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOn: false,
  },
};