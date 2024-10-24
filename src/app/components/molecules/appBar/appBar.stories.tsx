import { Meta, StoryFn } from '@storybook/react';
import { AppBar } from './appBar';;

export default {
  title: 'molecules/appBar',
  component: AppBar,
} as Meta<typeof AppBar>;

const Template: StoryFn = () => {
  return <AppBar />;
};

export const Default = Template.bind({});