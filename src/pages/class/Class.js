import { useState } from "react";
import Table from "./Table";
import TitleSearch from "./TitleSearch";
import "./studentTable.css";
import { useSelector } from "react-redux";
import { selectStudentByLevelTypeAndClass } from "../../features/studentsSlice";
import { useParams } from "react-router-dom";

const Class = () => {
  const { type, level,  clas } = useParams();
  const [searchTermInput, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const students = useSelector((state) =>
    selectStudentByLevelTypeAndClass(state, type, level, clas)
  );

  const handleSearch = (searchTerm) => {
    const filteredStudents = students.filter((student) => {
      const fullName = `${student.firstName} ${student.lastName}`;
      return fullName.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (searchTerm === "") {
      setSearchResults([]);
    } else {
      setSearchResults(filteredStudents);
    }
  };
  return (
    <main className="content container">
      <section>
        <TitleSearch
          onSearch={handleSearch}
          setSearchTerm={setSearchTerm}
        />
      </section>
      <section>
        <Table
          searchResults={searchResults}
          searchTermInput={searchTermInput}
          students={students}
        />
      </section>
    </main>
  );
};

export default Class;
