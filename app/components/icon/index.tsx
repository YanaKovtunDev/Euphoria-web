import { ReactSVG } from "react-svg";
import { FC } from "react";

import { TIconProps } from "@/app/types/components/icon.types";

import styles from "./index.module.scss";

export const IconComponent: FC<TIconProps> = ({
  icon,
  onClick,
  size = "medium",
}) => {
  const iconSrc = `/assets/icons/${icon}.svg`;

  return (
    <ReactSVG
      className={`${styles.icon} ${styles[size]}`}
      evalScripts="always"
      fallback={() => <span>Problem with icon {icon}</span>}
      onClick={onClick}
      onError={(error) => {
        console.error("Error occurs during icon injection", error);
      }}
      src={iconSrc}
      wrapper="span"
    />
  );
};
