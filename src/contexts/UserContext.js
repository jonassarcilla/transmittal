import { createContext } from "react";

export const UserContext = createContext({
    isLoading:true, 
    userInfo: null,
    selectedProject: null,
    selectedTransmittal: null
});