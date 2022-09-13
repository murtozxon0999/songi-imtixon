import { FC } from "react";

interface InputProps {
  type: string;
  label: string;
  width?: string;
  placeholder: string;
}

const Input: FC<InputProps> = ({ type, label, width, placeholder }) => {
  return (
    <>
      <form className="inputs">
        <label htmlFor={label}>{label}</label>
        <input
          style={{ width: width }}
          className="login-input"
          type={type}
          id={label}
          placeholder={placeholder}
        />
      </form>
    </>
  );
};

export default Input;
