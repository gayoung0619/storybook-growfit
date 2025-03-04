import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {LogoNavigationBar} from "../components/LogoNavigationBar.tsx";

const meta = {
  title: 'Navigation/LogoNavigationBar',
  component: LogoNavigationBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{width: "393px"}}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    showProfileButton: {
      control: "boolean",
      description: "마이페이지 버튼 표시 여부"
    },
    showAlarmButton: {
      control: "boolean",
      description: "알림 버튼 표시 여부"
    },
    title: {
      control: "text",
      description: "로고 타이틀"
    },
    onProfileButtonClick: {
      control: "clicked",
      description: "프로필 버튼 클릭 이벤트"
    },
    onAlarmButtonClick: {
      control: "clicked",
      description: "알림 버튼 클릭 이벤트"
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof LogoNavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showProfileButton: true,
    showAlarmButton: true,
    title: "그로우핏"
  },
};