import { useState } from "react";
import "./addStudent.css";
import { updateStudent } from "../../features/studentsSlice";
import Form from './Form'

const EditStudent = ({ isModalOpen, closeModal, prevFormData, modalContentRef }) => {
  const [formData, setFormData] = useState(prevFormData);

  if (!isModalOpen) return null;
  return (
    <Form
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      setFormData={setFormData}
      dispatchMethod={updateStudent}
      formData={formData}
      type='edit'
      modalContentRef={modalContentRef}
    />
  );
};

export default EditStudent;
