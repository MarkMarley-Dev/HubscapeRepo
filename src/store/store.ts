import {create} from 'zustand';
import { DayType, mockSchedule } from '../data/MockData';

type StoreState = {
    schedule: DayType[];
    moveVisit: (dayIndex: number, fromIndex: number, toIndex: number) => void;
};

export const useStore = create<StoreState>((set) => ({
    schedule: mockSchedule, 
    moveVisit: (dayIndex, fromIndex, toIndex) => set((state) => {
        const newSchedule = [...state.schedule];
        const movedVisit = newSchedule[dayIndex].visits.splice(fromIndex, 1)[0];
        newSchedule[dayIndex].visits.splice(toIndex, 0, movedVisit);

        return { schedule: newSchedule };
    }),
}));
