import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    // children represents all components wrapped by UserContextProvider.
    // These components will be able to access the context data.

    const [user, setUser] = useState(null);
    // Creating state that will be shared across the component tree.
    // user → holds the current user data
    // setUser → function to update the user state
    // null → initial value (no user logged in)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {/* 
              Providing shared state (user and setUser) to all descendant components.
              This works like passing props globally within the React component tree,
              without prop drilling.
            */}
            {children}            
        </UserContext.Provider>
    );
};

export default UserContextProvider;
