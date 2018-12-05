export interface ToggleProps {
  value: "ON" | "OFF";
  onButtonText: string;
  offButtonText: string;
  onChange: () => void;
}
