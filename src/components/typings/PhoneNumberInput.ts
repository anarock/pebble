export interface Country {
  id: number;
  name: string;
  country_code: string;
}

export interface PhoneNumberInputProps {
  country_code: string;
  phone: string;
  placeholder: string;
  onChange: (
    { country_code, phone }: { country_code: string; phone: string }
  ) => void;
  countries: Country[];
}

export interface PhoneNumberInputState {
  country?: Country;
}
