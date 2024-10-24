import { Meta, StoryFn } from '@storybook/react';
import { Canvas } from './canvas';

export default {
  title: 'molecules/Canvas',
  component: Canvas,
} as Meta<typeof Canvas>;

const Template: StoryFn = () => {
  return <Canvas />;
};

export const Default = Template.bind({});