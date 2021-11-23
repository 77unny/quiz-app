import { ISaveData } from '../../../organisms/quiz/types';

export type TData = {
  labels: string[];
  datasets: { data: number[]; borderColor: string; backgroundColor: string }[];
};

export type TTable = { id: string; date: string; difficulty: string; answers: number; time: number };

export interface IChart {
  historyList: ISaveData[];
}
