import { useState } from 'react';
import styles from './schedulePage.module.scss';
import { DayType } from '../../molecules/DayCard/types';
import ScheduleTemplate from '../../templates/MonthSchedule';
import { mockSchedule } from '../../../data/MockData';
import ScheduleModal from '../../organisms/Modals/ScheduleModal';

const SchedulePage = () => {
  const [viewDay, setViewDay] = useState<DayType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);


  const handleDayClick = (day: DayType) => {
    setViewDay(day);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setViewDay(null); 
  };

  return (
    <div className={styles.schedulePage}>
      <ScheduleTemplate schedule={mockSchedule} onDayClick={handleDayClick} />
      {viewDay && modalOpen && (
        <ScheduleModal day={viewDay} isOpen={modalOpen} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default SchedulePage;

