import React from 'react';
import styles from './toggleSwitch.module.scss';
import { ToggleSwitchProps } from './types';

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, handleToggle }) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isOn} onChange={handleToggle} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ToggleSwitch;
