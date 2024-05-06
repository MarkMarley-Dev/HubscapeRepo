import { useState } from 'react';
import styles from './schedulePage.module.scss';
import { DayType } from '../../molecules/DayCard/types';
import ScheduleTemplate from '../../templates/MonthSchedule';
import { mockSchedule } from '../../../data/MockData';
import ScheduleModal from '../../organisms/Modals/ScheduleModal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
    <DndProvider backend={HTML5Backend}>
      <div className={styles.schedulePage}>
        <ScheduleTemplate schedule={mockSchedule} onDayClick={handleDayClick} />
        {viewDay && modalOpen && (
          <ScheduleModal day={viewDay} isOpen={modalOpen} onClose={handleCloseModal} />
        )}
      </div>
    </DndProvider>
  );
};

export default SchedulePage;

