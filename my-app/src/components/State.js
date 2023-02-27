import React from "react";

const State = (props) => {
    return (
        <>
            <div>
                <label htmlFor="exampleInputPassword1" className="form-label">State Name</label>
                <select className="form-select" onChange={(i) => props.setinner(i.target.value)} aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Up">Up</option>
                    <option value="Siwan">Siwan</option>
                    <option value="Gorhpakpur">Gorhpakpur</option>
                    <option value="Maharashtra">Maharashtra</option>
                </select>
            </div>
        </>
    );
};

export default State