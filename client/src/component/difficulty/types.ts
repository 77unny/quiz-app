import { TDifficultyProperty, TValue } from '../../constants/types';

export interface IRadioButtonProps extends TDifficultyProperty {
  isChecked: boolean;
  handleChange: (value: TValue) => void;
}

export interface IDifficultyProps {
  selectedDifficulty: TValue;
  difficulty: TDifficultyProperty[];
  handleChange: (value: TValue) => void;
}
