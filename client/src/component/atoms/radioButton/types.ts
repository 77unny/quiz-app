export interface IRadioButtonProps {
  label: string;
  value: string;
  isChecked: boolean;
  handleChange: (value: string) => void;
}
