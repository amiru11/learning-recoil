import React from 'react';

interface IInputProps {
  type: string;
  value: any;
  placeholder?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
}

function Input({
  type,
  value,
  placeholder = '',
  handleChange,
}: IInputProps): JSX.Element {
  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
