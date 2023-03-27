import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "design-system";
import React, { useEffect, useRef } from "react";

export default {
  title: "components/Button",
  component: Button,
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default: Story<ButtonProps> = Template.bind({});
Default.args = {
  children: "Button",
};
