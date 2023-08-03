import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const STUDENTS_URL = "http://localhost:4000/students";

const initialState = {
  students: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await axios.get(STUDENTS_URL);
    return response.data;
  }
);

export const addNewStudent = createAsyncThunk(
  "students/addNewStudent",
  async (initialStudent) => {
    const response = await axios.post(STUDENTS_URL, initialStudent);
    return response.data;
  }
);

export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  async (initialStudent) => {
    const { id } = initialStudent;
    try {
      const response = await axios.put(`${STUDENTS_URL}/${id}`, initialStudent);
      return response.data;
    } catch (err) {
      //return err.message;
      return initialStudent; // only for testing Redux!
    }
  }
);

export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async (initialStudent) => {
    const { id } = initialStudent;
    try {
      const response = await axios.delete(`${STUDENTS_URL}/${id}`);
      if (response?.status === 200) return initialStudent;
      return `${response?.status}: ${response?.statusText}`;
    } catch (err) {
      return err.message;
    }
  }
);

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    sortData: (state, action) => {
      const { key, ascending } = action.payload;
      state.students.sort((a, b) => {
        const c = a[key];
        const d = b[key];
        if (c < d) return ascending ? -1 : 1;
        if (c > d) return ascending ? 1 : -1;
        return 0;
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchStudents.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.students = action.payload.sort((a, b) => {
          const c = a.lastName;
          const d = b.lastName;
          if (c < d) return -1;
          return 0;
        });;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewStudent.fulfilled, (state, action) => {
        // Fix for API student IDs:
        const sortedStudents = state.students.sort((a, b) => {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        });
        action.payload.id = sortedStudents[sortedStudents.length - 1].id + 1;
        // End fix for fake API student IDs

        action.payload.userId = Number(action.payload.userId);
        state.students.push(action.payload);
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Update could not complete");
          console.log(action.payload);
          return;
        }
        const { id } = action.payload;
        const students = state.students.filter((student) => student.id !== id);
        state.students = [...students, action.payload];
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Delete could not complete");
          console.log(action.payload);
          return;
        }
        const { id } = action.payload;
        const students = state.students.filter((student) => student.id !== id);
        state.students = students;
      });
  },
});

export const selectAllStudents = (state) => state.students.students;
export const getStudentsStatus = (state) => state.students.status;
export const getStudentsError = (state) => state.students.error;
export const selectStudentByLevelType = (state, type, level) =>
  state.students.students.filter(
    (student) => student.level === level && student.type === type
  );
export const selectStudentByLevelTypeAndClass = (state, type, level, clas='') =>
  state.students.students.filter(
    (student) => student.level === level && student.type === type && student.class === clas
  );
export const nbrAllStudents = (state) => state.students.students?.length;
export const nbrStudentsByType = (state, type) =>
  state.students.students.filter((student) => student.type === type).length;
export const { sortData } = studentsSlice.actions;

export default studentsSlice.reducer;
