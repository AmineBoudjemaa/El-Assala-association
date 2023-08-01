import { useState } from "react";

export function useModal(defaultValue) {
  const [isModalOpen, setIsModalOpen] = useState(defaultValue);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, openModal, closeModal };
}
