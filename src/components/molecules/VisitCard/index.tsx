import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { VisitProps } from './types';
import styles from './visitCard.module.scss';

export const VisitCard: React.FC<VisitProps> = ({ visit, index, moveVisit }) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'visit',
    item: () => {
      return { id: visit.id, index };
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop({
    accept: 'visit',
    hover(item: { id: number, index: number }, monitor) {
      if (!monitor.isOver()) {
        return;
      }
      if (item.index !== index) {
        moveVisit(visit.id, item.index, index);
        item.index = index; 
      }
    }
  });

  return (
    <div ref={node => drag(drop(node))} className={styles.visitCard} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <p>{visit.clientName} - {visit.site} - Duration: {visit.duration} - Start: {visit.startTime}</p>
      {visit.notes && <p>Notes: {visit.notes}</p>}
    </div>
  );
};

export default VisitCard;
