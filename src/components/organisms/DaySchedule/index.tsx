// components/Day/Day.tsx
import React from 'react';
import styles from './day.module.scss';
import VisitCard from '../../molecules/VisitCard';
import { DayProps } from './types';

const Day: React.FC<DayProps> = ({ day, isCurrent }) => {
  const dayClassName = isCurrent ? `${styles.day} ${styles.current}` : styles.day;

  return (
    <div className={dayClassName}>
      <h3>{day.date} -  <span>{day.operatives === 0 ? 'No operatives needed' : `Operatives: ${day.operatives}`}</span> - Start: {day.startTime}</h3>
      {day.visits.length > 0 ? (
        day.visits.map(visit => <VisitCard key={visit.id} visit={visit} />)
      ) : (
        <p>No visits scheduled.</p>
      )}
    </div>
  );
};

export default Day;
