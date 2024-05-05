import { DayType } from "../../../molecules/DayCard/types";

export interface ScheduleModalProps {
  day: DayType;
  isOpen: boolean;
  onClose: () => void;
}