import { ButtonHTMLAttributes } from "react";
import styles from "./MainButton.module.scss";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

const ICON_SIZE = 24;

type AllowedHtmlButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "style" | "className"
>;

type MainButtonProps = AllowedHtmlButtonProps & {
  icon?: IconName;
  fullWidth?: boolean;
  variant?: "primary" | "secondary";
};

export const MainButton = ({
  icon,
  children,
  fullWidth = false,
  variant = "primary",
  ...defaultButtonProps
}: MainButtonProps) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${
    fullWidth ? styles.fullWidth : ""
  }`;

  return (
    <button className={buttonClasses} {...defaultButtonProps}>
      {icon && <DynamicIcon name={icon} size={ICON_SIZE} />}
      {children}
    </button>
  );
};
