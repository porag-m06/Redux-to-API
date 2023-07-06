import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (name,thunkAPI) => {
        try {
            const response = await fetch('https://randomuser.me/api/?results=5');
            const data = await response.json();
            console.log("--------------> Data", data);
            return data.results;
        } catch (error) {
            console.log("--------------! Error", error);
            return thunkAPI.rejectWithValue("Something went wrong...!");
        }
    }
)

const initialState = {
    users: [],
    isLoading: false,
    error: undefined
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(fetchUsers.fulfilled, (state, action)=>{
                console.log("fulfilled", action.payload);
                state.isLoading = false;
                state.users = action.payload;
            })

            .addCase(fetchUsers.rejected, (state, action)=>{
                console.log("addCase: rejected");
                state.isLoading = false;
                state.error = action.payload;
            })
    },
    reducers: {}
})

export const { actions } = usersSlice;
export default usersSlice;