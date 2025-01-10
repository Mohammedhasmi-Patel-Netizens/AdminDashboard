import { useState } from "react";
import ToggleContext from "./ToggleContext";

const [toggle,setToggle] = useState(null);

const ToggleContextProvider = ({children})=>{
    <ToggleContext.Provider value={{toggle,setToggle}}>
        {
            children
        }
    </ToggleContext.Provider>
}

export default ToggleContextProvider;