import { useState } from "react";
import "./delete.css";
import { useDispatch } from "react-redux";
import { deleteStudent } from "../../features/studentsSlice";

const Delete = ({ closeDeleteModal, isDeleteModalOpen, id, modalContentRef }) => {
  const dispatch = useDispatch();
  const [requestStatus, setRequestStatus] = useState("idle");

  const onDeleteStudent = () => {
    if (requestStatus === "idle") {
      try {
        setRequestStatus("pending");
        dispatch(deleteStudent({ id })).unwrap();
      } catch (err) {
        console.error("Failed to delete the post", err);
      } finally {
        setRequestStatus("idle");
      }
    }}
  if (!isDeleteModalOpen) return null;
  return (
    <div className="modal" id="delete-modal" >
      <div className="modal-content" ref={modalContentRef}>
        <span className="close-modal-btn" onClick={closeDeleteModal}>
          &times;
        </span>
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete this customer?</p>
        <button className="delete-confirm-btn" onClick={onDeleteStudent}>
          Yes, Delete
        </button>
        <button className="delete-cancel-btn" onClick={closeDeleteModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Delete;
