import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TabList } from '../components/TabList.tsx';

const meta = {
  title: 'List/TabList',
  component: TabList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tabList: {
      control: 'array',
      description: '탭리스트',
      default: ["tab1", "tab2", "tab3"]
    },
    onTabClick: {
      control: "clicked",
      description: "버튼 클릭 이벤트"
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabList: ["tab1", "tab2", "tab3"]
  },
};