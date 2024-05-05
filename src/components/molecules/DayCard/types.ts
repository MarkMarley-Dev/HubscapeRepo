export type Visit = {
  id: number;
  clientName: string;
  site: string;
  duration: string;
  startTime: string;
  notes?: string;
};

export type DayType = {
  date: string;
  operatives: number;
  startTime: string;
  visits: Visit[];
};

export interface DayCardProps {
  day: DayType;
  onClick: () => void;
}