import {create} from 'zustand';
import { mockSchedule } from '../data/MockData';
import { StoreState } from './types';


export const useStore = create<StoreState>((set) => ({
  schedule: mockSchedule,
  moveVisit: (dayIndex, fromIndex, toIndex) => set((state) => {
    const updatedSchedule = [...state.schedule];
    const day = updatedSchedule[dayIndex];
    let fromStartTime;
    let toStartTime;
    
     fromStartTime = day.visits[fromIndex].startTime;
     toStartTime = day.visits[toIndex].startTime;
    
    [day.visits[fromIndex], day.visits[toIndex]] = [day.visits[toIndex], day.visits[fromIndex]];
    
[day.visits[fromIndex].startTime, day.visits[toIndex].startTime] = [fromStartTime, toStartTime];
    console.log(fromStartTime, toStartTime)
     return { schedule: updatedSchedule };
  }),
}));