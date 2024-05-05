import React from 'react';
import styles from './dayCard.module.scss';
import { DayCardProps } from './types';


const DayCard: React.FC<DayCardProps> = ({ day, onClick }) => {
  const today = new Date().toISOString().slice(0, 10); 
  const isCurrentDay = day.date === today;
  
  return (
    <div className={isCurrentDay ? `${styles.dayCard} ${styles.current}` : styles.dayCard} onClick={onClick}>
      <p>Date: {day.date}</p>
      <p>Jobs: {day.visits.length}</p>
      <p>Operatives: {day.operatives}</p>
    </div>
  );
};

export default DayCard;
