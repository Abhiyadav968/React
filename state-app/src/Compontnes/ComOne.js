import React from "react";
// import ComTwo from "./ComTwo";

export default function ComOne(props) {

    return (
        <>
                <div className="my-2">
                    <label htmlFor="exampleInputEmail1" className="text-bold">current value</label>
                    <input type="text" className="form-control" value={props.ineer} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="current value" />
                </div>
                {/* <ComTwo /> */}
        </>
    );

};