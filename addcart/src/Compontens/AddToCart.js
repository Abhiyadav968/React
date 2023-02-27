import React, { useContext } from "react";
import { dataContext } from "./Context/DataProvider";

const AddToCart = () => {

  const { value } = useContext(dataContext);
  console.log(value)

  return (
    <>
      <div className="mt-5">
        {value ? <div className="inner m-auto" >
          <img src={value.url} className="card-img-top py-0 p-5" alt="..." />
          <div className="card-body py-0 p-5">
            <h5 className="card-title">{value.name}</h5>
          </div>
        </div> : null}
      </div>
    </>
  );
};

export default AddToCart;