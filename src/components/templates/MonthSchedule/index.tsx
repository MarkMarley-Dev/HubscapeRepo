import React from 'react';
import styles from './monthSchedule.module.scss';
import Day from '../../organisms/DaySchedule';
import { DayType } from '../../../data/MockData';

type MonthScheduleProps = {
  schedule: DayType[];
  currentDate: string; 
};

export const MonthSchedule: React.FC<MonthScheduleProps> = ({ schedule, currentDate }) => (
  <div className={styles.monthSchedule}>
    {schedule.map(day => (
      <Day key={day.date} day={day} isCurrent={day.date === currentDate} />
    ))}
  </div>
);

export default MonthSchedule;
