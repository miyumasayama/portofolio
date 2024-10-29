import { Meta, StoryFn } from "@storybook/react";
import { SuccessDialog } from "./successDialog";

type Props = {
  title: string;
  open: boolean;
  handleClose: () => void;
};

export default {
  title: "molecules/SuccessDialog",
  component: SuccessDialog,
} as Meta<typeof SuccessDialog>;

const Template: StoryFn<Props> = (args: Props) => {
  return <SuccessDialog {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  title: "Success",
  open: true,
  handleClose: () => {
    console.log("handleClose");
  },
};
