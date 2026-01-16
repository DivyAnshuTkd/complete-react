import { createSlice, nanoid } from '@reduxjs/toolkit';

// Initial state of the slice. It defines how the Redux store looks
// when the application loads for the first time.
const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
};

export const todoSlice = createSlice({
    // Name of the slice. Used as a prefix for generated action types.
    name: 'todo',                // name of the slice is 'todo'
    initialState,                // initial state of the slice, defined above
    reducers: {                  // reducers object containing multiple reducer functions
        // Reducer to add a new todo item.
        // Reducers define how the state changes in response to actions.
        addTodo: (state, action) => {                         // In state we get updated state value in the store, action carries data from UI to reducer
            // Creating a new todo object with a unique ID
            const todo = {
                id: nanoid(),
                // Data sent from UI via action.payload
                text: action.payload                       // action.payload carries data from UI → reducer
            };

            // Allowed due to Immer (state remains immutable internally)
            state.todos.push(todo);                           // “In Redux Toolkit, immutability is handled internally using Immer, so we can write mutating code like state.todos.push(todo). In Context API, we must manually create and return a new state using the spread operator.”
        },

        // Removes a todo based on the ID passed in action.payload

        // This looks like we are changing the state directly,
        // but Redux Toolkit uses Immer to handle immutability.
        // The original state remains unchanged,
        // and a new updated state is created automatically.

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },

        // Updates an existing todo's text
        updateTodo: (state, action) => {
            // action.payload carries data from UI → reducer

            const id = action.payload.id;
            const text = action.payload.text;

            // .find() is a JavaScript array method.

            // What .find() does (in simple words)

            // 👉 It searches an array and returns the FIRST element that matches a condition.

            // If nothing matches, it returns undefined.

            const existingTodo = state.todos.find(function (todo) {
                return todo.id === id;
            });

            if (existingTodo) {
                existingTodo.text = text;
            }
        }

    }
});

// Exporting the reducers individually because individual components can need any of the reducer as per the need.
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;       // methods in reducer are called actions. Here acitons are addTodo, removeTodo, updateTodo. We export them to use in our components.

// Exporting the reducer to be used in the Redux store
export default todoSlice.reducer;

// Actions describe WHAT happened in the application.
// They are signals/messages sent from UI to Redux.
