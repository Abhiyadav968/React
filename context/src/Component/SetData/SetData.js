import React,{useContext} from "react";
import { dataCopntext } from "../Context/DataProvider";

const SetData =()=>{
   const {value} = useContext(dataCopntext)
   
    return(
        <>
        <div>
           <p>{value}</p>
        </div>
        </>
    )
}
export default SetData;