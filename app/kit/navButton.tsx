import React, { FC } from "react";
import styles from "./navButton.module.css";
import { generateColor } from "../utils";

export enum NavButtonTypes {
  voting = "voting",
  breeds = "breeds",
  gallery = "gallery",
}
interface NavButtonProps {
  type: NavButtonTypes;
}
const NavButton: FC<NavButtonProps> = ({ type }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image} style={{ background: generateColor(type) }}>
        <img src={"/" + type + ".svg"} alt={type} />
      </div>
      <div className={styles.button}>{type.toLocaleUpperCase()}</div>
    </div>
  );
};

export default NavButton;
