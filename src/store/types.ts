import { DayType } from "../data/MockData";

export type StoreState = {
    schedule: DayType[];
    moveVisit: (dayIndex: number, fromIndex: number, toIndex: number) => void;
};
