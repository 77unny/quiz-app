export type TLabel = '랜덤' | '쉬움' | '보통' | '어려움';
export type TValue = 'random' | 'easy' | 'medium' | 'hard';

export interface IDifficulty {
  label: TLabel;
  value: TValue;
}
