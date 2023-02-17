import { Meta, Story } from "@storybook/react";
import Checkbox, { CheckboxProps } from "@headless-aria/checkbox";

export default {
  title: "components/checkbox",
  component: Checkbox,
} as Meta<CheckboxProps>;

const Template: Story<CheckboxProps> = (args) => (
  <Checkbox {...args}>Label</Checkbox>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  indeterminate: false,
  readOnly: false,
  required: false,
  checked: true,
  defaultChecked: false,
};
