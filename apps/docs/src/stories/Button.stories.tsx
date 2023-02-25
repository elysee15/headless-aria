import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Button, { ButtonProps } from "@headless-aria/core/button";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});
Default.args = {
  className: "button__primary",
  tabIndex: 1,
  disabled: false,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const buttonEl = canvas.getByRole("button");

  await userEvent.click(buttonEl);
  await expect(buttonEl.textContent).toBe("Button");
  await expect(buttonEl).toHaveClass("button__primary");
};
