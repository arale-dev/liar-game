import { ReactNode } from "react";
import styles from "./PlayBoard.module.scss";

const PlayBoard = ({ children }: { children?: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default PlayBoard;
