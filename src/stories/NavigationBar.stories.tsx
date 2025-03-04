import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TitleNavigationBar} from '../components/TitleNavigationBar.tsx';

const meta = {
  title: 'Navigation/TitleNavigationBar',
  component: TitleNavigationBar,
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
    showBackButton: {
      control: "boolean",
      description: "닫기 버튼 표시 여부"
    },
    showCloseButton: {
      control: "boolean",
      description: "페이지 이름 표시 여부"
    },
    showTitle: {
      control: "boolean",
      description: "페이지 이름 표시 여부"
    },
    title: {
      control: "text",
      description: "페이지 타이틀"
    },
    onBackButtonClick: {
      control: "clicked",
      description: "뒤로가기 버튼 클릭 이벤트"
    },
    onCloseButtonClick: {
      control: "clicked",
      description: "닫기 버튼 클릭 이벤트"
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TitleNavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: "타이틀"
  },
};