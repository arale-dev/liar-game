import { ReactNode } from "react";
import styles from "./BottomButton.module.scss";

const BottomButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <div className={styles.container} onClick={onClick}>
      {text}
    </div>
  );
};

export default BottomButton;
