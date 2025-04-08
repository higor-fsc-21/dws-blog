import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

type AllowedHtmlButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "style" | "className"
>;

type ButtonProps = AllowedHtmlButtonProps & {
  leftIcon?: IconName;
  rightIcon?: IconName;
  variant?: "primary" | "secondary";
};

export const Button = ({
  leftIcon,
  rightIcon,
  children,
  variant = "primary",
  ...defaultButtonProps
}: ButtonProps) => {
  const renderIcon = (icon: IconName) => {
    return <DynamicIcon name={icon} size={20} />;
  };

  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      {...defaultButtonProps}
    >
      {leftIcon && renderIcon(leftIcon)}
      {children}
      {rightIcon && renderIcon(rightIcon)}
    </button>
  );
};
