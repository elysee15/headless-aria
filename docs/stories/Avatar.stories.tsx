import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from 'design-system';

export default {
  title: 'components/Avatar',
  component: Avatar,
  argTypes: {
    variant: {
      name: 'variant',
      type: { name: 'string' },
      description: `The shape of the avatar.`,
      defaultValue: `rounded`,
      control: { type: 'radio' },
      options: ['circular', 'rounded', 'square'],
      table: {
        type: { summary: `"circular" | "rounded" | "square" | "string"` },
        defaultValue: { summary: `rounded` },
      },
    },
    size: {
      name: 'size',
      type: { name: 'string' },
      description: `The sizes attribute for the img element.`,
      defaultValue: `medium`,
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: `"small" | "medium" | "large" | "string"` },
        defaultValue: { summary: `medium` },
      },
    },
    alt: {
      name: 'alt',
      type: { name: 'string' },
      description: `Used in combination with src or srcSet to provide an alt attribute for the rendered img element.`,
      table: {
        type: { summary: `string` },
      },
    },
    src: {
      name: 'src',
      type: { name: 'string' },
      description: `The src attribute for the img element.`,
      table: {
        type: { summary: `string` },
      },
    },
  },
} as Meta<AvatarProps>;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const AvatarDefault = Template.bind({});
AvatarDefault.args = {
  variant: `rounded`,
  size: `medium`,
  alt: `koffi`,
  src: `https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80`
};

export const IconAvatar = Template.bind({});
IconAvatar.args = {
  children: `icon`
};