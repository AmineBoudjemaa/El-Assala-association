import React from "react";
import DeleteButton from "../../components/deleteButton/DeleteButton";
import EditButton from "../../components/updateButton/EditButton";

const Row = ({ student }) => {
  return (
    <tr>
      <td>{student.lastName}</td>
      <td>{student.firstName}</td>
      <td>{student.birthday}</td>
      <td>{student.monthsPurchased}</td>
      <td>{student.nextPaymentDate}</td>
      <td>{student.phoneNumber}</td>
      <td>
        <EditButton prevFormData={student} />
      </td>
      <td>
        <DeleteButton id={student.id} />
      </td>
    </tr>
  );
};

export default Row;
