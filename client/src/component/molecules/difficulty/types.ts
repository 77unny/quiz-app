import { TDifficultyProperty } from '../../../constants/types';

export interface IDifficultyProps {
  selectedDifficulty: string;
  difficulty: TDifficultyProperty[];
  handleChange: (value: string) => void;
}
