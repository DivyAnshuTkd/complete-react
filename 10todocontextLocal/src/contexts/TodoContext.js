import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // The object passed to createContext() is only a default/fallback value.
    // Actual shared data is supplied through TodoProvider and then read by components.
    
    todos: [      // these are properties of the context object
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    // functionalities to be provided in the context
    addTodo: (todo) => {},       // function to add a new todo
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});          
// Creates a context (a global container) for todo-related data


export const useTodo = () => {                                // “Whenever we call useTodo, then all the data of TodoContext will get fetched by using useContext and we will use the required data as per the need.”                  
// Custom hook that CONSUMES (reads) data from TodoContext
// It is a shortcut for useContext(TodoContext)
    return useContext(TodoContext);         // this useContext fetches data from TodoContext
}

export const TodoProvider = TodoContext.Provider;     
// Context Provider used to WRAP components and SUPPLY data to the context
// TodoProvider is the Provider component that we use to wrap components and supply context data — the actual wrapping happens when it is used in JSX.