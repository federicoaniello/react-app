import { forwardRef, useCallback } from "react"

export default forwardRef(function Select ({colors,onChange},ref){


    const toCapitalized = useCallback(string => {
        if(!string){
            return "";
        }
        return `${string[0].toUpperCase()}${string.substring(1).toLowerCase()}`
    }, []);


return(
    <select
    ref={ref}
    value=""
    onChange={onChange}
  >
    <option value="">Filter by color</option>
    {colors.map((color, index) => (
      <option key={index} value={color}>
        {toCapitalized(color)}
      </option>
    ))}
  </select>
)

})

