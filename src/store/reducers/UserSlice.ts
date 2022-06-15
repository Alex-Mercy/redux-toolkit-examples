import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/UserType";
import { fetchUsers } from "./ActionCreators";

type UserStateType = {
    users: UserType[];
    isLoading: boolean;
    error: string;
}

const initialState: UserStateType = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<UserType[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default userSlice.reducer;