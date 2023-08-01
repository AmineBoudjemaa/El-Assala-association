import { useEffect, useState } from "react"


export function useDropdown(ref) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggle = ()=>setIsOpen(!isOpen)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the modal content
      if (ref.current && !ref.current.contains(event.target)) {
        closeModal();
      }
    };

    // Add event listener when the modal is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener when the modal is closed
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, ref]);
  return [isOpen, openModal, closeModal, toggle]
}

