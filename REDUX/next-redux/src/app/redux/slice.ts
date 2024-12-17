import { createSlice, nanoid, PayloadAction, current, createAsyncThunk } from "@reduxjs/toolkit";

export interface User {
    id: string;
    name: string;
  }

export interface InitialState {
    users: User[];
    userApiData: [];
    isloading: boolean;
}

const initialState: InitialState ={
    users:JSON.parse(localStorage.getItem("users") || "[]"),
    userApiData: [],
    isloading: false,
}

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async ()=>{
    console.log("API called");
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json();
});


const Slice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser:(state, action: PayloadAction<string>)=>{
            console.log("action is: ", action);
            const data={
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data);
            let userData = JSON.stringify(current(state.users));
            localStorage.setItem("users", userData);
        },
        removeUser: (state, action: PayloadAction<string>)=>{
            console.log("remove action: ", action);
            const data = state.users.filter((item)=>{
                return item.id!==action.payload
            });
            state.users=data;
            localStorage.setItem("users", JSON.stringify(state.users));
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApiUsers.fulfilled, (state, action)=>{
            console.log("API Call Reducer", action);
            state.isloading = false;
            state.userApiData = action.payload;
        })
    }
})

export const {addUser, removeUser} =Slice.actions;
export default Slice.reducer;