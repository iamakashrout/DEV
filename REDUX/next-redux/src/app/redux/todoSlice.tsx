import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    id: string;
    name: string;
}

export interface ToDoState {
    todos: Todo[];
}

const initialState: ToDoState={
    todos: []
}

const Slice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo:(state, action: PayloadAction<string>)=>{
            console.log(action);
            const data={
                id: nanoid(),
                name: action.payload
            }
            state.todos.push(data);
        }
    }
});

export const {addTodo} =Slice.actions;
export default Slice.reducer;