import { createContext } from "react";

const appContext = {
    isLoading:true, 
    userInfo: null,
    isPrintPreviewOnly: false,
};

export const AppContext = createContext(appContext);