import React from "react";
import { forwardRef, ChangeEvent, ForwardRefRenderFunction } from "react";

interface SelectProps {
  colors: string[];
  selectedColor: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { colors, onChange, selectedColor },
  ref
) => {
  const toCapitalized = (string: string) => {
    return `${string[0].toUpperCase()}${string.substring(1).toLowerCase()}`;
  };

  return (
    <select ref={ref} value={selectedColor} onChange={onChange}>
      <option value="">Filter by color</option>
      {colors.map((color, index) => (
        <option key={index} value={color}>
          {toCapitalized(color)}
        </option>
      ))}
    </select>
  );
};

export default forwardRef(Select);
