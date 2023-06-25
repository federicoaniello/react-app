import { forwardRef } from "react"

const Select = forwardRef(function Select ({colors,onChange,selectedColor},ref){


    const toCapitalized = string => {
        return `${string[0].toUpperCase()}${string.substring(1).toLowerCase()}`
    };


return(
    <select ref={ref} value={selectedColor} onChange={onChange}>
    <option value="">Filter by color</option>
    {colors.map((color, index) => (
      <option key={index} value={color}>
        {toCapitalized(color)}
      </option>
    ))}
  </select>
)

})

export default Select;

