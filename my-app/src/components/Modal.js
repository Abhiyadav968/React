import React from "react";

const Modal = (props) => {

    return (
        <>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h2>{"Name : " + props.data}</h2><br />
                            <h3>{"Email  : " + props.value}</h3><br />
                            <h2>{"State : " + props.inner}</h2><br />
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Hide this modal and show the first with the button below.
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Modal