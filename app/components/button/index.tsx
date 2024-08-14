import React from "react";

import { IButtonProps } from "@/app/types/components/button.types";

import { IconComponent } from "@/app/components/icon";

import styles from "./index.module.scss";

const ButtonComponent: React.FC<IButtonProps> = ({
  label,
  type = "primary",
  size = "medium",
  icon,
  onClick,
  disabled,
  leftIcon,
  rightIcon,
  typeAttribute = "button",
  style,
}) => {
  const classes = `${styles.button} ${styles[type]} ${styles[size]} ${icon ? styles.icon : ""}`;

  return (
    <button
      type={typeAttribute}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {icon ? (
        <IconComponent icon={icon} />
      ) : (
        <>
          {leftIcon && <IconComponent icon={leftIcon} />}
          {label && <span>{label}</span>}
          {rightIcon && <IconComponent icon={rightIcon} />}
        </>
      )}
    </button>
  );
};

export default ButtonComponent;
