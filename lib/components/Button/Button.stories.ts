import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['solid', 'outline', 'ghost', 'link'],
      control: { type: 'radio' },
    },
    size: {
      options: ['default', 'sm', 'lg'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    size: 'lg',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
    size: 'lg',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
    size: 'lg',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Button',
    size: 'lg',
  },
};
