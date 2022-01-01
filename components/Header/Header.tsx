import { FC } from "react";
import styles from "./Header.module.scss";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h2>My components lib</h2>
        <div>
          <input placeholder="Search"></input>
          <button>Seacrh</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
