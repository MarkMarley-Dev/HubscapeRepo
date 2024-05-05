import React from 'react';
import styles from './daySchedule.module.scss';
import VisitCard from '../../molecules/VisitCard';
import { DayScheduleProps } from './types';

const DaySchedule: React.FC<DayScheduleProps> = ({ day }) => {

  return (
    <div className={styles.daySchedule}>
      <h2>Current day schedule for {day.date}</h2>
      { day.visits.length > 0 ? day.visits.map(visit => (
        <VisitCard key={visit.id} visit={visit} />
      )) : <p>We have no visits today.</p>}
    </div>
  );
};

export default DaySchedule;

