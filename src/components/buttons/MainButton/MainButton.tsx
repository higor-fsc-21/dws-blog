import { ButtonHTMLAttributes } from "react";
import styles from "./MainButton.module.scss";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { IconSize } from "../../../constants/icons";

type AllowedHtmlButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "style" | "className"
>;

type MainButtonProps = AllowedHtmlButtonProps & {
  icon?: IconName;
  className?: string;
  fullWidth?: boolean;
  variant?: "primary" | "secondary";
};

export const MainButton = ({
  icon,
  children,
  className,
  fullWidth = false,
  variant = "primary",
  ...defaultButtonProps
}: MainButtonProps) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${
    fullWidth ? styles.fullWidth : ""
  } ${className}`;

  return (
    <button className={buttonClasses} {...defaultButtonProps}>
      {icon && <DynamicIcon name={icon} size={IconSize.MEDIUM} />}
      {children}
    </button>
  );
};
