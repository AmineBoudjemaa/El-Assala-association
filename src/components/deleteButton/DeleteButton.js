import Delete from "../../modals/delete/Delete";
import { useDropdown} from "../../customHooks/customHooks";
import { useRef } from "react";

const DeleteButton = ({ id }) => {
  const modalContentRef = useRef(null);
  const [isOpen, openModal, closeModal,] = useDropdown(modalContentRef)
  return (
    <>
      <Delete
        closeDeleteModal={closeModal}
        isDeleteModalOpen={isOpen}
        id={id}
        modalContentRef={modalContentRef}
      />
      <button className="delete-btn" onClick={openModal}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </>
  );
};

export default DeleteButton;
