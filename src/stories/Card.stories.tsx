import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import "../styles/tokens/tokens.scss";
import "./card.scss";

// Card component using CSS class for tokens
const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="storybook-card">{children}</div>
);

const meta = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Visual States

- **Default**:
  - Background: $comp-card-bg
  - Text: $comp-card-text
  - Border: $comp-card-border
  - Shadow: $comp-card-shadow
  - Border Radius: $comp-card-radius
  - Padding: $comp-card-padding

## Interaction Behaviors

- **Transitions**:
  - $comp-card-transition (references $sys-transition-base)

## Accessibility

- Minimum contrast ratio: 4.5:1 for text
- Minimum touch target: 44×44px
- Focus states must be clearly visible
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a card using design tokens.",
  },
};
