import styles from "./DropdownContent.module.scss";
import { DropdownOption } from "../DropdownOption/DropdownOption";
import { useDropdown } from "../DropdownContext";

export const DropdownContent = () => {
  const { options, isOpen } = useDropdown();

  if (!isOpen) return null;

  return (
    <div className={styles.content}>
      {options.map((option) => (
        <DropdownOption key={option.id} option={option} />
      ))}
    </div>
  );
};
