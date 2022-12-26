import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs } from "firebase/firestore";
import { todoCollectionRef } from "../utils/firebase";

const initialState = {
  todoList: [],
  isLoading: false,
  error: "",
};

export const getTasks = createAsyncThunk(
  "todo/getTasks",
  async (arg, dispatch) => {
    try {
      const data = await getDocs(todoCollectionRef);
      const newTasks = data.docs.map((doc) => {
        const obj = doc._document.data.value.mapValue.fields;
        return {
          id: doc.id,
          task: obj.task.stringValue,
          isDone: obj.isDone.booleanValue,
        };
      });
      return newTasks;
    } catch (error) {
      dispatch.rejectWithValue("Something went wrong...");
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todoList = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default todoSlice.reducer;
