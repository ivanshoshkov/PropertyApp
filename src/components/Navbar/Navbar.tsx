import React from "react";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";
type NavbarProps = {
  title: string;
};

const Navbar: React.FC<NavbarProps> = ({ title }): React.ReactElement => {
  document.title = title;
  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_items} onClick={() => navigate(`/`)}>
        <div className={styles.logo}></div>
        <div className={styles.navbar_title}>{title}</div>
      </div>
    </div>
  );
};

export default Navbar;
