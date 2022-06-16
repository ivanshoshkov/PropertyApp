import React from "react";
import styles from "./Container.module.css";
type ContainerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  );
};

export default Container;
