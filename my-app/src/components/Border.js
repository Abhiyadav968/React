import React, { useState } from "react";

export default function FormInput() {

    const [value, setvalue] = useState('')
    const [data, setdata] = useState(false)
    const submit = () => {
        value.length === 0 ? setdata(true) : setdata(false)

    };

    return (
        <>
            <div className="p-auto mt-5 ps-5">
                <div className="text-ceneter w-50 h-50 py-5  bg-light top-50 start-50">
                    <label htmlFor="mytxt" className={` `} >Name</label>
                    <input type="text" id="mytxt" className={`${data === true ? 'border border-danger' :
                        'border border-success'}`} onChange={(e) => setvalue(e.target.value)} />
                    <button type="button" className="btn btn-sm btn-primary" onClick={submit}>Submit</button>
                </div>
            </div>
        </>
    );
};