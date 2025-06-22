import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Badge,
  badgeIconCheck,
  badgeIconExclamation,
  badgeIconInfo,
  badgeIconSuccess,
  badgeIconError,
  badgeIconWarning,
} from "./Badge";
import "../styles/system/_tokens.scss";

const meta = {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Badge

Badge component with support for icons (left or right), light and info variants.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Badge label",
    },
    icon: {
      control: false,
      description: "Badge icon (left or right)",
    },
    iconPosition: {
      control: { type: "radio" },
      options: ["left", "right"],
      description: "Icon position",
    },
    variant: {
      control: { type: "radio" },
      options: ["base", "light", "info"],
      description: "Badge variant",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "Badge Label",
    variant: "base",
  },
};

export const BaseWithLeftIcon: Story = {
  args: {
    label: "Badge Label",
    icon: badgeIconExclamation,
    iconPosition: "left",
    variant: "base",
  },
};

export const BaseWithRightIcon: Story = {
  args: {
    label: "Badge Label",
    icon: badgeIconExclamation,
    iconPosition: "right",
    variant: "base",
  },
};

export const Light: Story = {
  args: {
    label: "Badge Label",
    variant: "light",
  },
};

export const Info: Story = {
  args: {
    label: "Badge Label",
    icon: badgeIconInfo,
    iconPosition: "left",
    variant: "info",
  },
};

export const Success: Story = {
  args: {
    label: "Success",
    icon: badgeIconSuccess,
    iconPosition: "left",
    variant: "success",
  },
};

export const Error: Story = {
  args: {
    label: "Error",
    icon: badgeIconError,
    iconPosition: "left",
    variant: "error",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning",
    icon: badgeIconWarning,
    iconPosition: "left",
    variant: "warning",
  },
};
