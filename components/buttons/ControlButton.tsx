import { ReactNode } from "react";
import styles from "./ControlButton.module.scss";

const ControlButton = ({
  isIncrease,
  onClick,
}: {
  isIncrease?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`${styles.container} ${isIncrease && styles.increase}`}
      onClick={onClick}
    >
      {isIncrease ? ">" : "<"}
    </div>
  );
};

export default ControlButton;
