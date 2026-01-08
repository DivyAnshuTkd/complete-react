import { createContext, useContext } from "react";
/*
  Creating a ThemeContext.
  The object passed here is the DEFAULT value.
  This default is used only if a component tries to access the context
  without being wrapped inside <ThemeProvider>.
*/
export const ThemeContext = createContext({
    themeMode: "light",      // Current theme mode: "light" or "dark"
    darkTheme: () => {},     // Function to switch to dark theme (placeholder)
    lightTheme: () => {},    // Function to switch to light theme (placeholder)
});

/*
  Exporting the Provider directly.
  This will be used to wrap components and provide actual values.
*/
export const ThemeProvider = ThemeContext.Provider;

/*
  Custom hook for accessing the ThemeContext.
  This avoids importing useContext and ThemeContext everywhere.
  Any component can simply call useTheme() to get theme data.
*/
export default function useTheme(){
    return useContext(ThemeContext);
}
