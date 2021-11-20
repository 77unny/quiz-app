export interface IRadioButtonProps<T> {
  label: T;
  value: string;
  isChecked: boolean;
  handleChange: (value: string) => void;
}
