import { Meta, Story } from "@storybook/react";
import Checkbox, { CheckboxProps } from "@headless-aria/checkbox";

export default {
  title: "components/checkbox",
  component: Checkbox,
} as Meta<CheckboxProps>;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  isDisabled: false,
  isIndeterminate: false,
  isReadOnly: false,
  isRequired: false,
  isSelected: false,
};
