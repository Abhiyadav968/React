import React, {useContext} from "react";
import { dataContext } from "./Context/DataProvider";

const Cart = () => {
    const data = [
        {
            id:1,
            name: "I-phone",
            price: 599,
            url: "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/6/x/j/-original-imaghxejqvpwfqh2.jpeg?q=70"
        }
    ]
    // const [cart, setCart] = useState([])
    // console.log(cart);
    const {setValue} = useContext(dataContext)

    return (
        <>
           <div className="">
           {data.map(e => (
                <div key={e.id} className="inner mt-5 m-auto">
                    <img src={e.url} className="card-img-top py-0 p-5" alt="..." />
                    <div className="card-body py-0 p-5">
                        <h5 className="card-title">{e.name}</h5>
                        <button className="btn btn-primary" onClick={()=>{setValue(e)}}>Buy Now</button>
                    </div>
                </div>
            ))}
           </div>
           
        </>
    );
};

export default Cart;