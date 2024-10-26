import { Meta, StoryFn } from "@storybook/react";
import { NextButton } from "./nextButton";
export default {
  title: "molecules/NextButton",
  component: NextButton,
} as Meta<typeof NextButton>;

const Template: StoryFn = () => {
  return <NextButton />;
};

export const Default = Template.bind({});
