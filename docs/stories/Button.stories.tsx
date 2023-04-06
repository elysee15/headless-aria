import { Button, ThemeProvider, ButtonProps } from "design-system";
import { Meta, Story } from "@storybook/react";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    color: {
      options: ["primary", "secondary", "error", "warning"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => (
  <ThemeProvider theme={{}}>
    <Button
      {...args}
      style={{
        background: "red !important",
      }}
    />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Click Me",
  color: "primary",
  leftIcon: "<",
  rightIcon: ">",
  disabled: false,
  size: "medium",
};
