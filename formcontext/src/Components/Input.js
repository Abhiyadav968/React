import React, { useContext } from "react";
import { dataContext } from "./Context/DataProvider";

const Input = () => {
    const { setValue } = useContext(dataContext)
    return (    
        <>
            <div className="mb-3">
                <label htmlFor="namein" className="form-label">Value</label>
                <input type="text" className="form-control mb-4" onChange={(e) => setValue(e.target.value)} id="namein" placeholder="Enter Value" />
            </div>
        </>
    );
};

export default Input;