import "./titleSearch.css"
import { useParams } from "react-router-dom";
import AddStudentButton from "../../components/addStudentButton/AddStudentButton";

const TitleSearch = ({ onSearch, setSearchTerm }) => {
  const { level, type } = useParams();

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <>
      <h1>
        {type} {level}
      </h1>
      <div className="search-and-add">
        <AddStudentButton />
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search customers..."
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
};

export default TitleSearch;
