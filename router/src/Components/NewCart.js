import React, { useState, useContext } from 'react'
import { BsHeart } from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'
import { MdShoppingBasket } from 'react-icons/md'
import { BsFillHeartFill } from 'react-icons/bs'
import { dataContext } from './Context/DataProvider'

const NewCart = () => {
    let data = [
        {
            id: 1,
            name: "Lcd-pc",
            price: 51999,
            url: 'https://rukminim1.flixcart.com/image/612/612/ks0onm80/monitor/w/6/6/ha270-um-hw0si-a01-acer-original-imag5zjnk4yad4uz.jpeg?q=70'
        },
        {
            id: 2,
            name: "Camera",
            price: 51,
            url: 'https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70'
        },
        {
            id: 3,
            name: "I-Phone",
            price: 599,
            url: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/6/x/j/-original-imaghxejqvpwfqh2.jpeg?q=70'
        },
        {
            id: 4,
            name: "Printer",
            price: 1999,
            url: 'https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70'
        },
        {
            id: 5,
            name: "Baby Gear",
            price: 1999,
            url: 'https://rukminim1.flixcart.com/image/416/416/ktq4l8w0/stroller-pram/k/6/4/0-cloudie-baby-stroller-with-5-point-safety-harness-and-original-imag7y2z7jqgecxt.jpeg?q=70'
        }
    ]

    const { setValue } = useContext(dataContext);

    const [get, setGet] = useState(false);

    const toogale = () => {
        setGet(!get)
        console.log(get)
    }

    return (
        <>
            <div>
                <div className=' mt-32 flex '>
                    {data.map(e => (
                        // cart
                        <div key={e.id} className="w-full flex flex-col shadow-white items-center border mx-1 py-4">
                            {/* up */}
                            <div className='flex '>
                                <div className=''>
                                    <p className='w-auto ml-2 bg-yellow-200 px-4 py-1 rounded-lg'>50% off</p>
                                </div>
                                <div className="pl-[120px] pb-3" onClick={toogale} >
                                    {get === true ? <BsFillHeartFill className='text-lg mx-3 my-2 text-red-500 cursor-pointer' /> : <BsHeart className='text-lg mx-3 my-2 text-red-700 cursor-pointer' />}
                                </div>
                            </div>
                            {/* img */}
                            <div className=''>
                                <img src={e.url} className='w-40 h-48' />
                            </div>
                            {/* price */}
                            <div className="flex pt-5">
                                <div>
                                    <p>{e.name}</p>
                                </div>

                                <div className='pl-11'>
                                    <p><strong className='pr-2'>Price :-</strong>{e.price}</p>
                                </div>
                            </div>
                            {/* footer */}
                            <div className=" flex pt-3">
                                <div className='flex text-2xl text-red-400 cursor-pointer'>
                                    <AiOutlineStar className='' />
                                    <AiOutlineStar className='' />
                                    <AiOutlineStar className='' />
                                    <AiOutlineStar className='' />
                                    <AiOutlineStar className='' />
                                </div>
                                {/* buttion */}
                                <div className='text-2xl text-red-400 pl-16'>
                                    <MdShoppingBasket className='cursor-pointer' onClick={() =>{setValue(e)} } />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NewCart;