import React, { useState } from "react";
import './addClassForm.css'
import { useDispatch, useSelector } from "react-redux";
import { addNewClass, selectAllCategories } from "../../features/categoriesSlice";

const initialFormData = {
  category: "",
  niveauTitle: "",
  newClass: "",
};

const AddClassForm = () => {
  const dispatch = useDispatch();
  const categoriesChangeable = ["primaire", "CEM", "lycee"]
  const categories = useSelector(selectAllCategories)
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedCategory = categories.find(
      (cat) => cat.category === formData.category
    );
    const selectedNiveau = selectedCategory.niveaux.find(
      (niv) => niv.title === formData.niveauTitle
    );
    const updatedNiveau = {
      ...selectedNiveau,
      classes: [...selectedNiveau.classes, formData.newClass],
    };
    const niveauIndex = selectedCategory.niveaux.findIndex(
      (niv) => niv.title === formData.niveauTitle
    );
    const updatedCategory = {
      ...selectedCategory,
      niveaux: [
        ...selectedCategory.niveaux.slice(0, niveauIndex),
        updatedNiveau,
        ...selectedCategory.niveaux.slice(niveauIndex + 1),
      ],
    };
    const updatedCategories = [
      ...categories.filter((cat) => cat.id !== selectedCategory.id),
      updatedCategory,
    ];
    const id = selectedCategory.id
    dispatch(addNewClass({ id, updatedCategory, updatedCategories }))
    setFormData({
      category: "",
      niveauTitle: "",
      newClass: "",
    });
  };

  return (
    <main className="content container formWrapper">
      <h1>Add e new class</h1>
      <form className="addClassForm" onSubmit={handleSubmit}>
        <label>
          Category:
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Select a category</option>
            {categoriesChangeable && categoriesChangeable.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        {formData.category && (
          <label>
            Niveau:
            <select name="niveauTitle" value={formData.niveauTitle} onChange={handleChange}>
              <option value="">Select a niveau</option>
              {categories
                .find((cat) => cat.category === formData.category)
                .niveaux.map((niv) => (
                  <option key={niv.title} value={niv.title}>
                    {niv.title}
                  </option>
                ))}
            </select>
          </label>
        )}

        {formData.niveauTitle && (
          <label>
            New Class:
            <input
              type="text"
              name="newClass"
              value={formData.newClass}
              onChange={handleChange}
              placeholder="Enter a new class"
            />
          </label>
        )}

        <button type="submit" className="addClassButton">
          Add Class
        </button>
      </form>
    </main>
  );
};

export default AddClassForm