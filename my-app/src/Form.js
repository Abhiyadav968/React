
import React, { useState } from 'react';
import Modal from './components/Modal';
import State from './components/State';

export default function Form() {

    const [data, setdata] = useState('')
    const [value, setvalue] = useState('')
    const [inner, setinner] = useState('')
    const save = () => {
        console.log(["Name : " + data, "Email : " + value, inner]);
    };

    return (
        <>
            <div className="form p-5 mt-5">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={(e) => setdata(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" className="form-control" onChange={(a) => setvalue(a.target.value)} id="exampleInputPassword1" placeholder='Enter Your Email' />
                </div>

                <State setinner={setinner} />

                <br /><br />
                <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" onClick={save} role="button">Submit</a>
            </div>
            <div>

            </div>

            {/* Modal button */}

            <Modal data={data} value={value} inner={inner} />
        </>
    );


}

