import { FC, useState } from "react";

import { IInputProps } from "@/app/types/components/input.types";
import { IconComponent } from "@/app/components/icon";

import styles from "./index.module.scss";

const InputComponent: FC<IInputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  size = "large",
  error,
  touched,
  onChange,
  onBlur,
  disabled,
  width = "100%",
  icon = type === "password" ? "Hide" : "",
  iconPosition = "right",
  formData,
  style,
  customClassName,
  showLabel = true,
}) => {
  const [inputType, setInputType] = useState(type);

  const inputValue = value ?? formData?.values?.[name] ?? "";
  const inputError = error ?? formData?.errors?.[name];
  const inputTouched = touched ?? formData?.touched?.[name];

  const inputStyle = { width, ...style };

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === "text" ? "password" : "text"));
  };

  const renderIcon = () =>
    type === "password" ? (
      <IconComponent
        icon={`${inputType === "password" ? "Hide" : "See"}`}
        size="small"
        onClick={togglePasswordVisibility}
      />
    ) : (
      <IconComponent icon={icon} />
    );

  const renderInput = () => (
    <input
      type={inputType}
      id={label}
      name={name}
      className={`${styles.input} ${styles[type]}`}
      placeholder={placeholder}
      value={inputValue}
      onChange={onChange || formData?.handleChange}
      disabled={disabled}
      onBlur={onBlur}
    />
  );

  return (
    <div
      className={`${styles.inputGroup}  ${customClassName}`}
      style={inputStyle}
    >
      {showLabel && (
        <label className={styles.label} htmlFor={label}>
          {label}
        </label>
      )}
      <div
        className={`${styles.inputContainer} ${styles.regular_border} ${styles[size]}`}
      >
        {iconPosition === "left" && <div>{renderIcon()}</div>}
        {renderInput()}
        {iconPosition === "right" && <div>{renderIcon()}</div>}
      </div>
      {inputTouched && inputError && (
        <div className={styles.error}>{inputError}</div>
      )}
    </div>
  );
};

export default InputComponent;
