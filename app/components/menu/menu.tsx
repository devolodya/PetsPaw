import React from "react";
import styles from "./menu.module.css";
import { NavButton, NavButtonTypes } from "@/app/kit";

const Menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <img src="logo.svg" alt="logo" />
        </div>
        <div>
          <div className={styles.header}>Hi!👋</div>
          <div className={styles.subheader}>
            Welcome to MacPaw Bootcamp 2023
          </div>
        </div>
        <div>
          <div className={styles.accentText}>Lets start using The Cat API</div>
          <div className={styles.buttonsContainer}>
            <NavButton type={NavButtonTypes.voting} />
            <NavButton type={NavButtonTypes.breeds} />
            <NavButton type={NavButtonTypes.gallery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
