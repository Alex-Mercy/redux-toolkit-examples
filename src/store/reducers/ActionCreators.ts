import { AppDispatch } from "../store"
import axios from 'axios';
import { UserType } from "../../types/UserType";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";


// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching());
//         const response = await axios.get<UserType[]>('https://jsonplaceholder.typicode.com/users');
//         dispatch(userSlice.actions.usersFetchingSucces(response.data))
//     }catch(e: any) {
//         dispatch(userSlice.actions.usersFetchingError(e.message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<UserType[]>('https://jsonplaceholder.typicode.com/users');
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
        }

    })