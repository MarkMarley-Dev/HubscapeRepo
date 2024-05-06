export type VisitProps = {
  visit: {
    id: number;
    clientName: string;
    site: string;
    duration: string;
    startTime: string;
    notes?: string;
  };
  moveVisit: (dayIndex: number, fromIndex: number, toIndex: number) => void;
  index: number;
};
