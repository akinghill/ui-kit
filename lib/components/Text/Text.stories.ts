import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'heading_1',
        'heading_2',
        'heading_3',
        'body_1',
        'body_2',
        'utility_1',
        'utility_2',
      ],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: 'h1',
    variant: 'body_1',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};
