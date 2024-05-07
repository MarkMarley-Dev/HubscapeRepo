import React from 'react';
import VisitCard from '../../molecules/VisitCard';
import { DayScheduleProps } from './types';
import styles from './daySchedule.module.scss';
import { useStore } from '../../../store/store';

const DaySchedule: React.FC<DayScheduleProps> = ({ day }) => {
  const {schedule, moveVisit } = useStore(); 

  return (
    <div className={styles.daySchedule}>
      <h2>Current day schedule for {day.date}</h2>
      {day.visits.length > 0 ? day.visits.map((visit, index) => (
        <VisitCard key={visit.id} visit={visit} index={index} moveVisit={moveVisit} />
      )) : <p>No visits today.</p>}
    </div>
  );
};

export default DaySchedule;


