import { CSSProperties } from "react";

type TButtonType = "primary" | "secondary" | "text" | "elevated";
type TButtonTypeAttribute = "button" | "submit" | "reset";
type TButtonSize = "small" | "medium" | "large";

export interface IButtonProps {
  label: string;
  type?: TButtonType;
  typeAttribute?: TButtonTypeAttribute;
  size?: TButtonSize;
  icon?: string;
  onClick?: () => void;
  disabled?: boolean;
  style?: CSSProperties;
  leftIcon?: string;
  rightIcon?: string;
}
