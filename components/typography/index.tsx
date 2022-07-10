import styles from "./index.module.scss";

const Title = ({ text, center }: { text: string; center?: boolean }) => {
  return (
    <div className={`${center ? styles.center : ""} ${styles.title}`}>
      {text}
    </div>
  );
};

const Subject = ({ text, center }: { text: string; center?: boolean }) => {
  return (
    <div className={`${center ? styles.center : ""} ${styles.subject}`}>
      {text}
    </div>
  );
};

const Description = ({
  text,
  center,
}: {
  text: string | number;
  center?: boolean;
}) => {
  return (
    <div className={`${center ? styles.center : ""}  ${styles.description}`}>
      {text}
    </div>
  );
};

export { Title, Subject, Description };
