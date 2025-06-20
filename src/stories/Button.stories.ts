import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      description: {
        component: `
## Visual States

- **Default**: 
  - Background: $comp-button-bg-default (#222222)
  - Text: $comp-button-text-default (#FFFFFF)
  - Border: $comp-button-border-default (#222222)
  
- **Hover**: 
  - Background: $comp-button-bg-hover (#555555)
  - Text: $comp-button-text-hover (#FFFFFF)
  
- **Pressed**: 
  - Background: $comp-button-bg-pressed (#000000)
  - Text: $comp-button-text-pressed (#FFFFFF)
  
- **Disabled**: 
  - Background: $comp-button-bg-disabled (#b0b0b0)
  - Text: $comp-button-text-disabled (#FFFFFF)
  - Opacity: $comp-button-opacity-disabled (0.7)

## Interaction Behaviors

- **Transitions**: 
  - $comp-button-transition (references $sys-transition-base: all 0.2s ease)
  
- **Focus States**:
  - Focus Ring: $comp-button-focus-ring (2px solid #005FCC)
  - Outline: $comp-button-outline (2px solid #005FCC)
  
- **Cursor**: 
  - Default: $comp-button-cursor-default (pointer)
  - Disabled: $comp-button-cursor-disabled (not-allowed)

## Accessibility

- Minimum contrast ratio: 4.5:1 for text
- Minimum touch target: 44×44px
- Focus states must be clearly visible
        `,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      description: "Button size",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimarySmall: Story = {
  args: {
    type: "primary",
    size: "small",
    label: "Primary Small",
  },
};

export const PrimaryMedium: Story = {
  args: {
    type: "primary",
    size: "medium",
    label: "Primary Medium",
  },
};

export const PrimaryLarge: Story = {
  args: {
    type: "primary",
    size: "large",
    label: "Primary Large",
  },
};

export const SecondarySmall: Story = {
  args: {
    type: "secondary",
    size: "small",
    label: "Secondary Small",
  },
};

export const SecondaryMedium: Story = {
  args: {
    type: "secondary",
    size: "medium",
    label: "Secondary Medium",
  },
};

export const SecondaryLarge: Story = {
  args: {
    type: "secondary",
    size: "large",
    label: "Secondary Large",
  },
};
