import { IDifficulty, TValue } from '../../constants/types';

export interface IRadioButtonProps extends IDifficulty {
  isChecked: boolean;
  handleChange: (value: TValue) => void;
}

export interface IDifficultyProps {
  selectedDifficulty: TValue;
  difficulty: IDifficulty[];
  handleChange: (value: TValue) => void;
}
