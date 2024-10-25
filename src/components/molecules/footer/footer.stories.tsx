import { Meta, StoryFn } from '@storybook/react';
import { Footer } from './footer';
;

export default {
  title: 'molecules/footer',
  component: Footer,
} as Meta<typeof Footer>;

const Template: StoryFn = () => {
  return <Footer />;
};

export const Default = Template.bind({});