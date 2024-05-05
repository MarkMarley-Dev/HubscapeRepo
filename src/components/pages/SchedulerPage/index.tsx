// components/SchedulePage/SchedulePage.tsx
import MonthSchedule from '../../templates/MonthSchedule';
import { mockSchedule } from '../../../data/MockData';


const SchedulePage = () => {
  const today = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format

  return (
    <div>
        <MonthSchedule schedule={mockSchedule} currentDate={today} />
    </div>
  );
};

export default SchedulePage;
