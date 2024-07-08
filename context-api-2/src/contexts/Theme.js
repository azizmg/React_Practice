import { createContext, useContext } from "react";

 export const ThemeContext=createContext({
    isDark:'dark',
    handleTheme:()=>{},
 })

 export const ThemeContextProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}