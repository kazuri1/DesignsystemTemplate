import React from "react";
import type { ReactNode } from "react";
import "./button.scss";

export interface ButtonProps {
  /** Button type: primary or secondary */
  type?: "primary" | "secondary";
  /** What background color to use */
  backgroundColor?: string;
  /** Button size: small, medium, or large */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: ReactNode;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  type = "primary",
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const typeClass = `storybook-button--${type}`;
  const sizeClass = `storybook-button--${size}`;
  return (
    <button
      type="button"
      className={[`storybook-button`, sizeClass, typeClass].join(" ")}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};
