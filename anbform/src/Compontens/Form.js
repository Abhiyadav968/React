import React, { useContext } from "react";
import { dataContext } from "./Context/DataProvider";

const Form = () => {
    const { setValue } = useContext(dataContext)
    const { setValuein } = useContext(dataContext)
    const { setSelv } = useContext(dataContext)
    const radio = (e) => {
        console.log(e.target.value)
    }
    return (
        <>
            <div className="Form border p-5 rounded mt-5 text-white">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name :-</label>
                    <input type="text" className="form-control" id="name" onChange={(e) => setValue(e.target.value)} placeholder="Enter Your Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email :-</label>
                    <input type="email" className="form-control" id="email" onChange={(a) => setValuein(a.target.value)} aria-describedby="emailHelp" placeholder="Enter Your Email" />
                </div>
                <label htmlFor="" className="mb-2">Select Gender</label>
                <div onClick={radio}>
                    <div class="form-check" >
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            male
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            female
                        </label>
                    </div>
                </div>
                <div>
                    <label htmlFor="" className="mb-2">Select State</label>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck3" />
                        <label className="form-check-label" htmlFor="exampleCheck3">Bihar</label>
                        <input type="checkbox" className="form-check-nput ms-3" id="exampleCheck4" />
                        <label className="form-check-label ms-2" htmlFor="exampleCheck4">UP</label>
                        <input type="checkbox" className="form-check-nput ms-3" id="exampleCheck5" />
                        <label className="form-check-label ms-2" htmlFor="exampleCheck5">MP</label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary col-sm-12">Submit</button>
                {/* <a class="btn btn-primary col-sm-12" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Submit</a> */}
            </div>
        </>
    );
};

export default Form;