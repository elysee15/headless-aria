import { Meta, Story } from "@storybook/react";
import { Button } from "design-system";
import React from "react";

export default {
  title: "components/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: Story<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});
Default.args = {};
