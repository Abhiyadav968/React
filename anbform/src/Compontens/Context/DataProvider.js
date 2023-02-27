import React,{createContext,useState} from "react";
export const dataContext = createContext('')

const DataProvider = ({children}) => {

    const [value, setValue] = useState('')
    const [valuein, setValuein] = useState('')
    const [selv, setSelv] = useState('')
    console.log(value)
    console.log(valuein)
    console.log(selv)

    return (
        <>
        <dataContext.Provider  value={{setValue,value,setValuein,valuein,setSelv,selv}}>
            {children}
        </dataContext.Provider>
        </>
    );
};

export default DataProvider;