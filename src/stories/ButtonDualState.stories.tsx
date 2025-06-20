import type { Meta, StoryObj } from "@storybook/react-vite";
import { sysIconAdd as SysIconAdd } from "../styles/system/icons";
import "../styles/system/_tokens.scss";
import "./button.scss";

import { ButtonDualState } from "./ButtonDualState";

const meta = {
  title: "Example/ButtonDualState",
  component: ButtonDualState,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Button Dual State

This story demonstrates a button with two states:
- **Not Pressed**: Uses the secondary style
- **Pressed**: Uses the primary style
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
      description: "Button type",
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      description: "Button size",
    },
  },
} satisfies Meta<typeof ButtonDualState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotPressed: Story = {
  args: {
    type: "secondary",
    size: "medium",
    label: "Not Pressed",
  },
  render: (args) => (
    <ButtonDualState
      {...args}
      label={
        <span
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5em" }}
        >
          {<SysIconAdd className="sys-icon" />}
          Not Pressed
        </span>
      }
    />
  ),
};

export const Pressed: Story = {
  args: {
    type: "primary",
    size: "medium",
    label: "Pressed",
  },
  render: (args) => (
    <ButtonDualState
      {...args}
      label={
        <span
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5em" }}
        >
          {<SysIconAdd className="sys-icon" />}
          Pressed
        </span>
      }
    />
  ),
};
