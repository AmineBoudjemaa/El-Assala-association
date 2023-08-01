import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SIDEBAR_URL = "http://localhost:4000/sidebar";

const initialState = {
  sidebar: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchSidebar = createAsyncThunk(
  "sidebar/fetchSidebar",
  async () => {
    const response = await axios.get(SIDEBAR_URL);
    return response.data;
  }
);

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSidebar.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSidebar.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched sidebar to the array
        state.sidebar = action.payload;
      })
      .addCase(fetchSidebar.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const filterByKey = (obj, keyToFilter) => {
  const filtered = {};
  if (obj.hasOwnProperty(keyToFilter)) {
    filtered[keyToFilter] = obj[keyToFilter];
  }
  return filtered;
};

const calculateNbrOfClasses = (sidebar) => {
  let totalItem = 0;
  Object.fromEntries(
    Object.keys(sidebar).map((key) => {
      const sidebarType = sidebar[key];
      sidebarType.forEach((item) => {
        if (item.subItems.length === 0) {
          totalItem++;
        } else {
          totalItem += item.subItems.length;
        }
      });
      return [key, sidebarType];
    })
  );
  return totalItem;
};
const calculateNbrOfClassesByType = (sidebar, type) => {
  let totalItem = 0;
  if(sidebar[type]){
    const sidebarType = sidebar[type];
    sidebarType.forEach((item) => {
      if (item.subItems.length === 0) {
        totalItem++;
      } else {
        totalItem += item.subItems.length;
      }
    });
  }
  return totalItem;
};

export const selectAllSidebar = (state) => state.sidebar.sidebar;
export const getSidebarStatus = (state) => state.sidebar.status;
export const getSidebarError = (state) => state.sidebar.error;
export const selectSidebarByType = (state, type) =>
  filterByKey(state.sidebar.sidebar, type);
export const nbrAllClasses = (state) =>
  calculateNbrOfClasses(state.sidebar.sidebar);
export const nbrClassesByType = (state, type) =>
  calculateNbrOfClassesByType(state.sidebar.sidebar, type);

export default sidebarSlice.reducer;
