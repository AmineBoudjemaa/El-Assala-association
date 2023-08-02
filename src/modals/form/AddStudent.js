import { useState } from "react";
import "./addStudent.css";
import { addNewStudent } from "../../features/studentsSlice";
import Form from './Form'
import { useParams } from "react-router-dom";

const AddStudent = ({ isModalOpen, closeModal, modalContentRef }) => {
  const { type, level } = useParams();
  const [formData, setFormData] = useState({
    firstName: "ssss",
    lastName: "sbb",
    birthday: "",
    monthsPurchased: 3,
    nextPaymentDate: "",
    phoneNumber: "44444444444444",
    type,
    level,
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
