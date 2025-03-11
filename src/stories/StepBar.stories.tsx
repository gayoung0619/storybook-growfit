import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { StepBar } from '../components/StepBar.tsx';

const meta = {
  title: 'STEPBAR/StepBar',
  component: StepBar,
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
    width: { control: 'text', description: 'StepBar 파란바의 퍼센테이지' },
  },
} satisfies Meta<typeof StepBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '20%',
  },
};