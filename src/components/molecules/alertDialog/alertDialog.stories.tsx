import { Meta, StoryFn } from "@storybook/react";
import { AlertDialog } from "./alertDialog";

type Props = {
  title: string;
  open: boolean;
  handleClose: () => void;
};

export default {
  title: "molecules/AlertDialog",
  component: AlertDialog,
} as Meta<typeof AlertDialog>;

const Template: StoryFn<Props> = (args: Props) => {
  return <AlertDialog {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  title: "alert",
  open: true,
  handleClose: () => {
    console.log("handleClose");
  },
};
