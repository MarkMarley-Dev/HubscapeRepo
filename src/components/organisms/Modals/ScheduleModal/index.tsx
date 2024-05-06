import React from 'react';
import styles from './scheduleModal.module.scss';
import DaySchedule from '../../DaySchedule';
import { ScheduleModalProps } from './types';


const ScheduleModal: React.FC<ScheduleModalProps> = ({ day, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) { 
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <DaySchedule day={day} />
      </div>
    </div>
  );
};

export default ScheduleModal;
