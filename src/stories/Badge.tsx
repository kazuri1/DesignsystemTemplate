import React from "react";
import "../styles/system/_tokens.scss";
import "./badge.scss";
import {
  AiOutlineCheck,
  AiOutlineExclamationCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { MdErrorOutline, MdWarningAmber } from "react-icons/md";

export type BadgeVariant =
  | "base"
  | "light"
  | "info"
  | "success"
  | "error"
  | "warning";
export type BadgeIconPosition = "left" | "right";

interface BadgeProps {
  label: string;
  icon?: React.ReactNode;
  iconPosition?: BadgeIconPosition;
  variant?: BadgeVariant;
}

export const Badge = ({
  label,
  icon,
  iconPosition = "left",
  variant = "base",
}: BadgeProps) => {
  return (
    <span className={`storybook-badge storybook-badge--${variant}`}>
      {icon && iconPosition === "left" && (
        <span className="storybook-badge__icon">{icon}</span>
      )}
      <span className="storybook-badge__label">{label}</span>
      {icon && iconPosition === "right" && (
        <span className="storybook-badge__icon">{icon}</span>
      )}
    </span>
  );
};

// Icon tokens for stories
export const badgeIconCheck = <AiOutlineCheck />;
export const badgeIconExclamation = <AiOutlineExclamationCircle />;
export const badgeIconInfo = <AiOutlineInfoCircle />;
export const badgeIconSuccess = <AiOutlineCheck />;
export const badgeIconError = <MdErrorOutline />;
export const badgeIconWarning = <MdWarningAmber />;
