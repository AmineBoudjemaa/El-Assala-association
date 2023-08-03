import { useState } from "react";
import { addNewStudent } from "../../features/studentsSlice";
import { useParams } from "react-router-dom";
import Form from './Form'
import "./addStudent.css";

const AddStudent = ({ isModalOpen, closeModal, modalContentRef }) => {
  const { type, level, clas } = useParams();
  const [formData, setFormData] = useState({
    firstName: "ssss",
    lastName: "sbb",
    birthday: "",
    monthsPurchased: 3,
    nextPaymentDate: "",
    phoneNumber: "44444444444444",
    type,
    level,
    class: clas
  });

  if (!isModalOpen) return null;
  return (
    <Form
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      setFormData={setFormData}
      dispatchMethod={addNewStudent}
      formData={formData}
      type="Add"
      modalContentRef={modalContentRef}
    />
  );
};

export default AddStudent;
