import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";
import "../styles/system/_tokens.scss";

const meta = {
  title: "Example/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Avatar

Avatar component for user initials, with 4 sizes:
- **Extra Small (xs):** 20x20 px
- **Small (sm):** 24x24 px
- **Medium (md):** 32x32 px
- **Large (lg):** 48x48 px
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
      description: "Avatar size",
    },
    initials: {
      control: { type: "text" },
      description: "User initials",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExtraSmall: Story = {
  args: {
    initials: "AB",
    size: "xs",
  },
};

export const Small: Story = {
  args: {
    initials: "AB",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    initials: "AB",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    initials: "AB",
    size: "lg",
  },
};
