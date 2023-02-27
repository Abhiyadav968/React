import React, { useContext, useState } from "react";    
import Button from "./Button";
import Input from "./Input";
import InputTwo from "./InputTwo";
import { dataContext } from "./Context/DataProvider";

const Form = () => {
const {value, setget}=useContext(dataContext)

    const Submit =()=>{
        setget(value);
    }
    return (
        <>
            <div className="main border rounded p-4 mt-5">
                <div className="px-4">
                    <Input />
                    <InputTwo />
                    <Button    Submit={Submit}  />
                </div>
            </div>
        </>
    );
};

export default Form;