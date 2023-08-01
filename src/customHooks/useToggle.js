import { useState } from "react";

export function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue() {
    console.log(value)
    setValue(!value);
  }

  return [value, toggleValue];
}
