import React, { useState } from "react";
import ComOne from "./ComOne";

export default function ComTwo() {
    const [data, setData] = useState('');
    const [ineer, setInner] = useState('');

    const submit = () => {
        setInner(data)
        console.log(ineer)
    }
    return (
        <>
            <div className="main border p-5 rounded mt-4">
                <div className="my-2">
                    <ComOne ineer={ineer} />
                </div>
                <div className="my-3 mt-2 mb-4">
                    <label htmlFor="exampleInputEmail1" className="text-bold">value</label>
                    <input type="text" className="form-control" onChange={(e) => { setData(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter value" />
                </div>
                {/* button */}
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button" onClick={submit}>Submit</button>
                </div>
            </div>

        </>
    );

};