import { Visit } from "../../../data/MockData";

export type DayProps = {
  day: {
    date: string;
    operatives: number;
    startTime: string;
    visits: Visit[];
  };
  isCurrent?: boolean;
};