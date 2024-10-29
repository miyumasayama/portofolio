import { Meta, StoryFn } from "@storybook/react";
import { BackButton } from "./backButton";
export default {
  title: "molecules/BackButton",
  component: BackButton,
} as Meta<typeof BackButton>;

const Template: StoryFn = () => {
  return <BackButton />;
};

export const Default = Template.bind({});
