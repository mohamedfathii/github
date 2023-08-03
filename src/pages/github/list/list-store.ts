import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Users } from "../../../interfaces/github/users.interface";
import { Repositories } from "../../../interfaces/github/repositories.interface";

interface UserState {
  searchQuery: string;
  filterOption: string;
  data: Array<Users | Repositories>;
}

const initialState: UserState = {
  searchQuery: "",
  filterOption: "",
  data: [],
};

const storeSlice = () => {
  return {
    name: "github_data",
    initialState,
    reducers: {
      getStoreData: (state: any) => state,
      updateStoreData: (state: any, action: PayloadAction<UserState>) => {
        return {
          ...state,
          searchQuery: action.payload.searchQuery,
          filterOption: action.payload.filterOption,
          data: action.payload.data,
        };
      },
    },
  };
};

export const githubSlice = createSlice(storeSlice());

export const { updateStoreData, getStoreData } = githubSlice.actions;

export default githubSlice.reducer;
