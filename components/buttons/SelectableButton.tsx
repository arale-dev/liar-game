import { ReactNode } from "react";
import styles from "./SelectableButton.module.scss";

const SelectableButton = ({
  text,
  isSelected,
  onClick,
}: {
  text: string;
  isSelected?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`${styles.container} ${isSelected && styles.selected}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default SelectableButton;
