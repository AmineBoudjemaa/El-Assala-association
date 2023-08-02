import { useRef } from "react";
import { useDropdown } from "../../customHooks/customHooks";
import EditStudent from "../../modals/form/EditStudent";

const EditButton = ({ prevFormData }) => {
  // const { isModalOpen, openModal, closeModal } = useModal(false);
  const modalContentRef = useRef(null);
  const [isOpen, openModal, closeModal, ] = useDropdown(modalContentRef)
  return (
    <>
      <EditStudent
        isModalOpen={isOpen}
        closeModal={closeModal}
        prevFormData={prevFormData}
        modalContentRef={modalContentRef}
      />
      <button className="edit-btn" onClick={openModal}>
        <i className="fas fa-edit"></i>
      </button>
    </>
  );
};

export default EditButton;
