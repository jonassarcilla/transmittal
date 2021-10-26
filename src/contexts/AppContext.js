import { createContext } from "react";

const appContext = {
    isLoading:true, 
    userInfo: null,
    selectedProject: null,
    selectedTransmittal: null,
    isPrintPreviewOnly: false,
};

export const AppContext = createContext(appContext);