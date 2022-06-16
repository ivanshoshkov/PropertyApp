import React from "react";
import styles from "./Wrapper.module.css";
type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }): React.ReactElement => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
