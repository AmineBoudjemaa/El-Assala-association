import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentsError,
  getStudentsStatus,
  sortData,
} from "../../features/studentsSlice";
import Row from "./Row";

const Table = ({ searchResults, searchTermInput, students }) => {
  const dispatch = useDispatch();
  const [sortAsc, setSortAsc] = useState(true);
  const [sortKey, setSortKey] = useState("");
  const error = useSelector(getStudentsError);
  const studentStatus = useSelector(getStudentsStatus);

  const handleSortClick = (key) => {
    if (sortKey === key) {
      setSortAsc((prev) => !prev);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
    dispatch(sortData({ key, ascending: sortAsc }));
    setSortAsc(!sortAsc);
  };

  const getSortClass = (key) => {
    if (sortKey === key) {
      return sortAsc ? "sorted-asc" : "sorted-desc";
    }
    return "";
  };

  const renderSearchResults = () => {
    if (searchResults.length === 0 && searchTermInput === "") {
      return students.map((student) => (
        <Row key={student.id} student={student} />
      ));
    } else if (searchResults.length === 0) {
      return (
        <tr>
          <td>No results</td>
        </tr>
      );
    } else {
      return searchResults.map((student) => (
        <Row key={student.id} student={student} />
      ));
    }
  }

  if (studentStatus === "loading") {
    return <p>"Loading..."</p>;
  } else if (studentStatus === "failed") {
    return <p>{error}</p>;
  } else if (studentStatus === "succeeded") {
    return (
      <table className="customer-table">
        <thead>
          <tr>
            <th
              onClick={() => handleSortClick("lastName")}
              className={getSortClass("lastName")}
            >
              Last Name
              <i
                className={` fa-solid fa-angle-down sort-icon ${getSortClass(
                  "lastName"
                )}`}
              />
            </th>
            <th
              onClick={() => handleSortClick("firstName")}
              className={getSortClass("firstName")}
            >
              First Name
              <i
                className={` fa-solid fa-angle-down sort-icon ${getSortClass(
                  "firstName"
                )}`}
              />
            </th>
            <th>Birthday</th>
            <th onClick={() => handleSortClick("monthsPurchased")}>
              Months Purchased
            </th>
            <th>Next Payment Date</th>
            <th>Phone Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{renderSearchResults()}</tbody>
      </table>
    );
  }
};

export default Table;
