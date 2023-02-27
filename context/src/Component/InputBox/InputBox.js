import React,{useContext} from "react";
import { dataCopntext } from "../Context/DataProvider";
import SetData from "../SetData/SetData";

const InputBox =()=>{
   const {setValue} = useContext(dataCopntext)
    return(
        <>

        <div>
            <input type="text" onChange={(e)=>setValue(e.target.value)}/>
        </div>
    <SetData/>
        </>
    )
}
export default InputBox;