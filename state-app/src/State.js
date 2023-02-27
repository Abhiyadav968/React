import React, { useState } from "react";



const State = () => {

    let states = [
        {
            state_id: 1,
            Name: "Bihar",
        },
        {
            state_id: 2,
            Name: "up",
        },
        {
            state_id: 3,
            Name: "Jharkhand",
        },

    ]

    let Dist = [
        {
            state_id: 1,
            dist_id: 4,
            Name: "Chapra",
        },
        {
            state_id: 1,
            dist_id: 5,
            Name: "Patna",
        },

        // up
        {
            state_id: 2,
            dist_id: 6,
            Name: "Agara",
        },
        {
            state_id: 2,
            dist_id: 7,
            Name: "Aligar",
        },

        // Jharkhand
        {
            state_id: 3,
            dist_id: 8,
            Name: "Phusuru",
        },
        {
            state_id: 3,
            dist_id: 9,
            Name: "Jharkhandi",
        },
    ]

    const [data, setData] = useState('')

    let inner = Dist.filter(e => e.state_id == data)
    console.log(inner);
    console.log(data);

    return (
        <>
            <div className="main border p-5 rounded mt-4">
                {/* state */}
                <div className="my-2">
                    <select className="w-100 form-select" onClick={(e) => { setData(e.target.value) }}>
                        <option value="0" selected>Select State</option>
                        {states.map(e => (
                            <option key={e.state_id} value={e.state_id} >{e.Name}</option>
                        ))}
                    </select>
                </div>
                {/* district */}
                <div className="my-3 mt-4">
                    <select className="w-100 form-select">
                        <option value="0" selected>Select District</option>
                        {inner.map(e => (
                            <option key={e.dist_id} value={e.dist_id}>{e.Name}</option>
                        ))}
                    </select>
                </div>
                {/* button */}
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">Submit</button>
                </div>
            </div>
        </>
    );

}

export default State