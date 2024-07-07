// useFilteredLogs.ts
import { useMemo } from 'react';
import {
  formatDate,
  getWeekStartEnd,
  getMonthStartEnd,
} from '@/lib/utils';
import { Log } from '@/types';

export const useFilteredLogs = (
  logs: Log[],
  date: Date | undefined,
  frequency: string,
  habitGoal: number,
) => {
  return useMemo(() => {
    if (!date) return;

    const today = new Date(date);
    let filteredLog: Log | undefined;

    switch (frequency) {
      case 'Daily':
        filteredLog = logs.find(
          (log) =>
            formatDate(new Date(log.date)) === formatDate(today),
        );
        break;

      case 'Weekly':
        const { start: weekStart, end: weekEnd } =
          getWeekStartEnd(today);
        filteredLog = logs.find((log) => {
          const logDate = new Date(log.date);
          return logDate >= weekStart && logDate <= weekEnd;
        });
        break;

      case 'Monthly':
        const { start: monthStart, end: monthEnd } =
          getMonthStartEnd(today);
        filteredLog = logs.find((log) => {
          const logDate = new Date(log.date);
          return logDate >= monthStart && logDate <= monthEnd;
        });
        break;

      default:
        filteredLog = {
          habitCurrentCount: 0,
          habitGoal: habitGoal,
          isCompleted: false,
          date: new Date(),
        };
        break;
    }

    return filteredLog;
  }, [logs, date, frequency]);
};
