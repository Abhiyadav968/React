import React, { useContext } from "react";
import { dataContext } from "./Context/DataProvider";

const InputTwo = () => {
    const { get } = useContext(dataContext);
    return (
        <>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Current Value</label>
                <input type="text" className="form-control" id="name" value={get}  aria-describedby="emailHelp" placeholder="Current Value" />
            </div>

        </>
    );
};

export default InputTwo;