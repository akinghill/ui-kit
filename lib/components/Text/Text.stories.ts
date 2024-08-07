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
    as: 'p',
    variant: 'body_1',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};

export const Heading1: Story = {
  args: {
    as: 'h1',
    variant: 'heading_1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    as: 'h2',
    variant: 'heading_2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    as: 'h3',
    variant: 'heading_3',
    children: 'Heading 3',
  },
};

export const Body1: Story = {
  args: {
    as: 'p',
    variant: 'body_1',
    children: 'Body 1',
  },
};

export const Body2: Story = {
  args: {
    as: 'p',
    variant: 'body_2',
    children: 'Body 2',
  },
};

export const Utility1: Story = {
  args: {
    as: 'p',
    variant: 'utility_1',
    children: 'Utility 1',
  },
};

export const Utility2: Story = {
  args: {
    as: 'p',
    variant: 'utility_2',
    children: 'Utility 2',
  },
};
