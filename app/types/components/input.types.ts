import { FormikErrors, FormikProps, FormikTouched, FormikValues } from "formik";
import { ChangeEvent, CSSProperties, ReactNode } from "react";

type TType = "text" | "password" | "email" | "number";
type TIconPosition = "left" | "right";
type TSize = "medium" | "large";

export interface IInputProps {
  label?: string;
  name: string;
  type?: TType;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  width?: string;
  size?: TSize;
  icon?: string;
  iconPosition?: TIconPosition;
  formData?: FormikProps<FormikValues>;
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  style?: CSSProperties;
  customClassName?: string;
  showLabel?: boolean;
}
