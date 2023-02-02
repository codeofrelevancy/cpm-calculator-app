import { ChangeEvent, FocusEvent, ReactNode } from 'react';

// Calculator component
interface FormState {
  campaignCost: number | null;
  adImpressions: number | null;
  cpmRate: number | null;
}

const InitialFormState: FormState = {
  campaignCost: null,
  adImpressions: null,
  cpmRate: null,
};

// Textfield component
interface TextfieldProps {
  label: string;
  type?: string;
  name: string;
  value?: any;
  legend?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
}

// Button component
interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick: () => void;
}

export type { FormState, TextfieldProps, ButtonProps };
export { InitialFormState };
