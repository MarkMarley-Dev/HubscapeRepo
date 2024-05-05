import React, { useState } from 'react';
import styles from './monthSchedule.module.scss';
import DaySchedule from '../../organisms/DaySchedule';
import MonthSchedule from '../../organisms/monthSchedule';
import { ScheduleTemplateProps } from './types';
import Header from '../../organisms/Header';


const ScheduleTemplate: React.FC<ScheduleTemplateProps> = ({ schedule, onDayClick }) => {
  const [viewMode, setViewMode] = useState('day');
  const toggleViewMode = () => {
    setViewMode(prevMode => (prevMode === 'day' ? 'month' : 'day'));
  };

  return (
    <div className={styles.scheduleTemplate}>
      {/* <ToggleSwitch isOn={viewMode === 'month'} handleToggle={toggleViewMode} /> */}
       <Header isOn={viewMode === 'month'} handleToggle={toggleViewMode} />
      {viewMode === 'day' ? 
        <DaySchedule day={schedule.find(day => day.date === new Date().toISOString().slice(0, 10))!} /> : 
        <MonthSchedule schedule={schedule} onDayClick={onDayClick} />}
    </div>
  );
};

export default ScheduleTemplate;
