import React from "react";
import "../styles/system/_tokens.scss";
import "./avatar.scss";

export type AvatarSize = "xs" | "sm" | "md" | "lg";

interface AvatarProps {
  initials: string;
  size?: AvatarSize;
}

export const Avatar = ({ initials, size = "md" }: AvatarProps) => (
  <span className={`storybook-avatar storybook-avatar--${size}`}>
    {initials}
  </span>
);
