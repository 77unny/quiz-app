export type TLabel = '랜덤' | '쉬움' | '보통' | '어려움';
export type TValue = 'random' | 'easy' | 'medium' | 'hard';

export type TDifficultyProperty = {
  label: TLabel;
  value: TValue;
};

export interface IDifficulty {
  [key: string]: TDifficultyProperty;
}
