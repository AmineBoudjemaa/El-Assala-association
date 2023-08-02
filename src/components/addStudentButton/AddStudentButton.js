import "./addStudent.css"
import { useDropdown } from "../../customHooks/customHooks";
import AddStudent from "../../modals/form/AddStudent";
import { useRef } from "react";

const AddStudentButton = () => {
  const modalContentRef = useRef(null);
  const [isOpen, openModal, closeModal,] = useDropdown(modalContentRef)
  return (
    <>
      <AddStudent isModalOpen={isOpen} closeModal={closeModal} modalContentRef={modalContentRef} />
      <button className="add-customer-btn" onClick={openModal}>
        <i className="fas fa-user-plus"></i> Add New Customer
      </button>
    </>
  );
};

export default AddStudentButton;
