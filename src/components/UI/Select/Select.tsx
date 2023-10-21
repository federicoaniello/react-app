import { forwardRef, ChangeEvent } from "react";
import utilities from "../../../hooks/utilities";
interface SelectProps {
  colors: string[];
  selectedColor: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const { toCapitalized } = utilities();

const Select = forwardRef<HTMLSelectElement, SelectProps>((  { colors, onChange, selectedColor }, ref ) => {


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
});

export default Select;
