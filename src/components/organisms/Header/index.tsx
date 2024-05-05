import { useState } from 'react';
import styles from './header.module.scss';
import ToggleSwitch from '../../atoms/ToggleSwitch';
import { HeaderTypes } from './types';

const Header = ({isOn, handleToggle}:HeaderTypes) => {

  return (
    <nav className={styles.header}>
      <h1 className={styles.title}>Hubscape</h1>
      <div className={styles.toggleContainer}>
        <span className={styles.toggleLabel}>{isOn ? "Month Schedule" : "Day Schedule"}</span>
        <ToggleSwitch isOn={isOn} handleToggle={handleToggle} />
      </div>
    </nav>
  );
};

export default Header;
