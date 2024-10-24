import { Meta, StoryFn } from '@storybook/react';
import { HomeTitle } from './homeTitle';

type Props = {
  text: string
};

export default {
  title: 'molecules/homeTitle',
  component: HomeTitle,
} as Meta<typeof HomeTitle>;


const Template: StoryFn<Props> = (args:Props) => {
  return <HomeTitle {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  text: "About"
}