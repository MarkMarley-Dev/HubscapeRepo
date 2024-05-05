import { DayType } from "../../molecules/DayCard/types";

export interface ScheduleTemplateProps {
  schedule: DayType[];
  onDayClick: (day: DayType) => void;
}