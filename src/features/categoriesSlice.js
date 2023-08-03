import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CATEGORIES_URL = "http://localhost:4000/categories";

const initialState = {
  categories: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get(CATEGORIES_URL);
    return response.data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched categories to the array
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const filterByCategory = (categories, category) => {
  const filtered = categories.filter(cat=>cat.category===category);
  return filtered[0];
};
const filterByLevel = (categories, category, level) => {
  const filteredByCategory = filterByCategory(categories, category);
  const levelObj = filteredByCategory?.niveaux.filter(niv=>niv.title===level)
  if (levelObj) return levelObj[0].classes;
};

const calculateNbrOfClasses = (categories) => {
  let totalItem = 0;
  Object.fromEntries(
    Object.keys(categories).map((key) => {
      const categoriesType = categories[key];
      categoriesType.forEach((item) => {
        if (item.subItems.length === 0) {
          totalItem++;
        } else {
          totalItem += item.subItems.length;
        }
      });
      return [key, categoriesType];
    })
  );
  return totalItem;
};
const calculateNbrOfClassesByType = (categories, type) => {
  let totalItem = 0;
  if(categories[type]){
    const categoriesType = categories[type];
    categoriesType.forEach((item) => {
      if (item.subItems.length === 0) {
        totalItem++;
      } else {
        totalItem += item.subItems.length;
      }
    });
  }
  return totalItem;
};

const categoriesNames = (categories)=>{
  const arrayOfNames = categories.map((category) => category.category);
  return arrayOfNames
}

export const selectAllCategories = (state) => state.categories.categories;
export const getCategoriesStatus = (state) => state.categories.status;
export const getCategoriesError = (state) => state.categories.error;
export const getCategoriesNames = (state) => categoriesNames(state.categories.categories);
export const selectCategoriesByNiveau = (state, category) =>
  filterByCategory(state.categories.categories, category);
export const selectClasses = (state,category, level) =>
  filterByLevel(state.categories.categories,category, level);
export const nbrAllClasses = (state) =>
  calculateNbrOfClasses(state.categories.categories);
export const nbrClassesByType = (state, type) =>
  calculateNbrOfClassesByType(state.categories.categories, type);

export default categoriesSlice.reducer;
