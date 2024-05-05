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

export const mockSchedule: DayType[] = [
  { date: "2024-05-01", operatives: 3, startTime: "08:00", visits: [
    { id: 1, clientName: "ABC Corp", site: "Site 1", duration: "02:00", startTime: "08:30", notes: "Full garden cleanup, prepare for summer planting." },
    { id: 2, clientName: "XYZ Inc", site: "Site 2", duration: "01:30", startTime: "11:00", notes: "Assess tree health, trim where necessary." }
  ]},
  { date: "2024-05-02", operatives: 2, startTime: "09:00", visits: [
    { id: 3, clientName: "EFG Ltd", site: "Site 3", duration: "01:00", startTime: "09:30", notes: "Install new garden lighting and check electrical connections." }
  ]},
  { date: "2024-05-03", operatives: 4, startTime: "08:00", visits: [
    { id: 4, clientName: "HIJ Co", site: "Site 4", duration: "03:00", startTime: "08:45", notes: "Sprinkler system overhaul, replace faulty heads." }
  ]},
  { date: "2024-05-04", operatives: 0, startTime: "08:30", visits: [] },
  { date: "2024-05-05", operatives: 0, startTime: "08:30", visits: [] },
  
  { date: "2024-05-06", operatives: 2, startTime: "08:00", visits: [
    { id: 5, clientName: "KLM Inc", site: "Site 5", duration: "02:00", startTime: "08:15", notes: "Mulching and composting, focus on rose beds." },
    { id: 6, clientName: "NOP LLC", site: "Site 6", duration: "01:30", startTime: "11:00", notes: "Regular maintenance and pest control checks." }
  ]},
  { date: "2024-05-07", operatives: 3, startTime: "09:00", visits: [
    { id: 7, clientName: "QRS Inc", site: "Site 7", duration: "01:00", startTime: "09:30", notes: "Early inspection for disease in the shrubbery, apply treatments." }
  ]},
  { date: "2024-05-08", operatives: 1, startTime: "09:00", visits: [] },
  { date: "2024-05-09", operatives: 4, startTime: "08:00", visits: [
    { id: 8, clientName: "TUV Corp", site: "Site 8", duration: "03:00", startTime: "08:45", notes: "Replant several aged shrubs, introduce new soil enhancements." }
  ]},
  { date: "2024-05-10", operatives: 3, startTime: "10:00", visits: [
    { id: 9, clientName: "WXYZ Ltd", site: "Site 9", duration: "02:00", startTime: "10:15", notes: "Water feature cleaning and pump maintenance." }
  ]},
  { date: "2024-05-11", operatives: 2, startTime: "08:30", visits: [] },
  { date: "2024-05-12", operatives: 1, startTime: "08:30", visits: [] },
  { date: "2024-05-13", operatives: 3, startTime: "08:00", visits: [
    { id: 10, clientName: "ABC Inc", site: "Site 10", duration: "02:00", startTime: "08:15", notes: "Complete overhaul of garden layout, introduce new design elements." },
  { id: 11, clientName: "DEF LLC", site: "Site 11", duration: "02:00", startTime: "11:30", notes: "Prepare greenhouse for new seedlings, check ventilation." }
  ]},
  { date: "2024-05-14", operatives: 1, startTime: "08:00", visits: [
    { id: 12, clientName: "GHI Inc", site: "Site 12", duration: "01:00", startTime: "09:00", notes: "General site cleanup and waste removal." }
  ]},
  { date: "2024-05-15", operatives: 2, startTime: "09:00", visits: [
    { id: 13, clientName: "JKL Co", site: "Site 13", duration: "01:30", startTime: "09:30", notes: "Inspect and maintain pathways and fences." }
  ]},
  { date: "2024-05-16", operatives: 4, startTime: "08:30", visits: [
    { id: 14, clientName: "MNO LLC", site: "Site 14", duration: "02:30", startTime: "08:45", notes: "Plan and execute a new layout for the vegetable garden." },
    { id: 15, clientName: "PQR Corp", site: "Site 15", duration: "02:00", startTime: "11:30", notes: "Install new drip irrigation systems in high-need areas." }
  ]},
  { date: "2024-05-17", operatives: 1, startTime: "10:00", visits: [
    { id: 16, clientName: "STU Inc", site: "Site 16", duration: "01:00", startTime: "10:30", notes: "Herbicide application on non-crop areas to control weed growth." }
  ]},
  { date: "2024-05-18", operatives: 0, startTime: "08:00", visits: [] },
  { date: "2024-05-19", operatives: 0, startTime: "08:00", visits: [] },
 
  { date: "2024-05-20", operatives: 3, startTime: "08:00", visits: [
    { id: 17, clientName: "VWX Ltd", site: "Site 17", duration: "02:00", startTime: "08:15", notes: "Assess and treat plant diseases and pests with organic methods." },
    { id: 18, clientName: "YZ Inc", site: "Site 18", duration: "01:30", startTime: "11:00", notes: "Prune flowering shrubs and trees for optimal growth." }
  ]},
  { date: "2024-05-21", operatives: 2, startTime: "09:00", visits: [
    { id: 19, clientName: "ABC Corp", site: "Site 19", duration: "01:00", startTime: "09:30", notes: "Evaluate soil moisture and adjust irrigation schedules accordingly." }
  ]},
  { date: "2024-05-22", operatives: 4, startTime: "08:00", visits: [
    { id: 20, clientName: "DEF Ltd", site: "Site 20", duration: "03:00", startTime: "08:45", notes: "Prepare beds for summer annuals, include soil amendments." }
  ]},
  { date: "2024-05-23", operatives: 3, startTime: "08:30", visits: [
    { id: 21, clientName: "GHI LLC", site: "Site 21", duration: "02:00", startTime: "09:00", notes: "Repair and maintain wooden structures such as pergolas and gazebos." }
  ]},
  { date: "2024-05-24", operatives: 1, startTime: "10:00", visits: [
    { id: 22, clientName: "JKL Inc", site: "Site 22", duration: "01:00", startTime: "10:15", notes: "Conduct a detailed inspection of all gardening tools and equipment." }
  ]},
  { date: "2024-05-25", operatives: 0, startTime: "08:30", visits: [] },
  { date: "2024-05-25", operatives: 0, startTime: "08:30", visits: [] },

  { date: "2024-05-27", operatives: 3, startTime: "08:00", visits: [
    { id: 23, clientName: "MNO Corp", site: "Site 23", duration: "02:00", startTime: "08:15", notes: "Re-sodding areas with poor grass coverage, assess overall lawn health." },
    { id: 24, clientName: "PQR LLC", site: "Site 24", duration: "01:30", startTime: "11:00", notes: "Annual tree health check, apply nutrients and pest control as needed." }
  ]},
  { date: "2024-05-28", operatives: 2, startTime: "09:00", visits: [
    { id: 25, clientName: "STU Ltd", site: "Site 25", duration: "01:00", startTime: "09:30", notes: "Update landscape design for client's front yard, focus on drought-resistant plants." }
  ]},
  { date: "2024-05-29", operatives: 4, startTime: "08:00", visits: [
    { id: 26, clientName: "VWX Inc", site: "Site 26", duration: "03:00", startTime: "08:45", notes: "Major overhaul of irrigation system, introduce new technology for moisture sensing." },
    { id: 27, clientName: "YZ Inc", site: "Site 27", duration: "02:00", startTime: "12:00", notes: "Prepare and plant new herb garden, include educational labels for each herb." }
  ]},
  { date: "2024-05-30", operatives: 1, startTime: "10:00", visits: [
    { id: 28, clientName: "ABC Co", site: "Site 28", duration: "01:00", startTime: "10:15", notes: "Routine maintenance, check all systems are functioning ahead of public holiday." }
  ]},
  { date: "2024-05-31", operatives: 3, startTime: "09:00", visits: [
    { id: 29, clientName: "DEF Corp", site: "Site 29", duration: "02:00", startTime: "11:30", notes: "End-of-month review of all projects, ensure all client expectations are met." },
    { id: 30, clientName: "GHI Inc", site: "Site 30", duration: "01:45", startTime: "09:15", notes: "Seasonal preparation for high summer, finalize all mulching and pruning activities." }
  ]}
];
