import { useClickOutside } from "./customHooks";
import { useToggle } from "./useToggle";


export function useDropdown(Ref) {
  const [isDropdownOpen, toggleDropdown] = useToggle(false);
  useClickOutside(Ref, () => {
    if (isDropdownOpen) toggleDropdown();
  });
  return [isDropdownOpen, toggleDropdown ]
}

