import React from 'react';
import styles from './visitCard.module.scss';
import { VisitProps } from './types';

export const VisitCard: React.FC<VisitProps> = ({ visit }) => { 
  
  return (
  <div className={styles.visitCard}>
    <p>{visit.clientName} - {visit.site} - Duration: {visit.duration} - Start: {visit.startTime}</p>
    {visit.notes && <p>Notes: {visit.notes}</p>}
  </div>
);
}
export default VisitCard;
