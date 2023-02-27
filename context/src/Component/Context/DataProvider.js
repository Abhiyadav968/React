import React ,{createContext, useState}from "react";

export const dataCopntext=createContext('')

const DataProvider=({children})=>{
    const [value,setValue] = useState('')
    return(
        <>
        <dataCopntext.Provider value={{setValue,value}}>
           {children}
        </dataCopntext.Provider>
        </>
    )
}
export default DataProvider;