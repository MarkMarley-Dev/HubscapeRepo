import React from 'react';
import styles from './monthSchedule.module.scss';
import { DayType } from '../../molecules/DayCard/types';
import DayCard from '../../molecules/DayCard';

interface MonthScheduleProps {
  schedule: DayType[];
  onDayClick: (day: DayType) => void;
}

const MonthSchedule: React.FC<MonthScheduleProps> = ({ schedule, onDayClick }) => {
  return (
    <div className={styles.monthSchedule}>
      {schedule.map((day, index) => (
        <DayCard key={index} day={day} onClick={() => onDayClick(day)} />
      ))}
    </div>
  );
};

export default MonthSchedule;
