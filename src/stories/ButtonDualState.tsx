import React from "react";
import type { ReactNode } from "react";
import "./button.scss";

export interface ButtonDualStateProps {
  type?: "primary" | "secondary";
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: ReactNode;
  onClick?: () => void;
}

export const ButtonDualState = ({
  type = "primary",
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonDualStateProps) => {
  const typeClass = `storybook-button--${type}`;
  const sizeClass = `storybook-button--${size}`;
  return (
    <button
      type="button"
      className={[
        `storybook-button`,
        sizeClass,
        typeClass,
        "storybook-button--dual-state",
      ].join(" ")}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};
