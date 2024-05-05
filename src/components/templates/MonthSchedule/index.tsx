import React, { useState } from 'react';


import styles from './monthSchedule.module.scss';
import { DayType } from '../../molecules/DayCard/types';
import ToggleSwitch from '../../atoms/ToggleSwitch';
import DaySchedule from '../../organisms/DaySchedule';
import MonthSchedule from '../../organisms/monthSchedule';

interface ScheduleTemplateProps {
  schedule: DayType[];
  onDayClick: (day: DayType) => void;
}

const ScheduleTemplate: React.FC<ScheduleTemplateProps> = ({ schedule, onDayClick }) => {
  const [viewMode, setViewMode] = useState('day'); // 'day' or 'month'

  const toggleViewMode = () => {
    setViewMode(prevMode => (prevMode === 'day' ? 'month' : 'day'));
  };

  return (
    <div className={styles.scheduleTemplate}>
      <ToggleSwitch isOn={viewMode === 'month'} handleToggle={toggleViewMode} />
      {viewMode === 'day' ? 
        <DaySchedule day={schedule.find(day => day.date === new Date().toISOString().slice(0, 10))!} /> : 
        <MonthSchedule schedule={schedule} onDayClick={onDayClick} />}
    </div>
  );
};

export default ScheduleTemplate;
