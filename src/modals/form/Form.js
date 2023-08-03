import { useState } from "react";
import { useDispatch } from "react-redux";
import "./addStudent.css";

const AddStudent = ({
  isModalOpen,
  closeModal,
  setFormData,
  formData,
  dispatchMethod,
  type,
  modalContentRef
}) => {
  const submitText = type === "edit" ? "Edit Student" : "Add Student";
  const dispatch = useDispatch();
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedValue =
      name === "firstName" || name === "lastName"
        ? capitalizeFirstLetter(value)
        : value;
    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    if (addRequestStatus === "idle") {
      try {
        setAddRequestStatus("pending");
        dispatch(dispatchMethod(formData))
          .unwrap()
          .then((result) => {
            console.log("New post added:", result);
            closeModal();
          })
          .catch((error) => {
            console.error("Error adding new post:", error);
          });
        setFormData(formData);
      } catch (error) {
        console.error("Error submitting the form:", error);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  if (!isModalOpen) return null;
  return (
    <div className="modal" id="customer-modal" >
      <div className="modal-content"
        ref={modalContentRef}>
        <span
          className="close-modal-btn"
          id="close-modal-btn"
          onClick={closeModal}
        >
          &times;
        </span>
        <h2>Add New Customer</h2>
        <form onSubmit={handleSubmit} id="customer-form">
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label htmlFor="birthday">Birthday:</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            required
          />

          <label htmlFor="months-purchased">Months Purchased:</label>
          <input
            type="number"
            id="months-purchased"
            name="monthsPurchased"
            value={formData.monthsPurchased}
            onChange={handleChange}
            required
          />

          <label htmlFor="next-payment-date">Next Payment Date:</label>
          <input
            type="date"
            id="next-payment-date"
            name="nextPaymentDate"
            value={formData.nextPaymentDate}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone-number">Phone Number:</label>
          <input
            type="tel"
            id="phone-number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <input type="submit" value={submitText} />
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
