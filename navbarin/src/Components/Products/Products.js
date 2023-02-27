import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import { MdOutlineShoppingBasket } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import Cart from '../Cart/Cart'

const Products = () => {
    const [myvalue, setMyvalue] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) =>
                setMyvalue(res.data)

            )
    }, [])
    const dispatch = useDispatch() 
    // console.log(myvalue)
    return (
        <>
            <div className="mx-20">
                <div className="w-full md:flex flex-wrap justify-between mb-10">
                    {myvalue.map((e) => {
                        return (
                            <>
                                <div key={e.id} className=" w-[280px]  mt-5 rounded-md border bg-white shadow-md">
                                    <div className="flex justify-between pt-3 px-2">
                                        <div className='bg-orange-400 px-3 py-1 text-sm text-white rounded-full'>off 50%</div>
                                        <div><BsFillHeartFill className='cursor-pointer text-red-400' /></div>
                                    </div>
                                    <div className="flex justify-center">
                                        <img src={e.image} alt="" className='w-[150px] h-40 mt-5' />
                                    </div>
                                        <div className='text-orange-400 pl-3 mt-3'>
                                            <div><p>price: {e.price}</p></div>
                                        </div>
                                    <div className="flex justify-between mt-3 px-3 pb-3">
                                        <div className="flex text-orange-400 gap-1">
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarFill />
                                            <BsStarHalf />
                                        </div>
                                        <div className="text-orange-400 cursor-pointer text-xl">
                                            <MdOutlineShoppingBasket onClick={()=>dispatch(Cart(e))} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Products