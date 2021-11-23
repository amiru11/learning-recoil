import React from 'react';

interface IInputProps {
  type: string;
  value: any;
  placeholder?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => any;
}

function Input({
  type,
  value,
  placeholder = '',
  handleChange,
  handleKeyDown,
}: IInputProps): JSX.Element {
  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
    />
  );
}

export default Input;
