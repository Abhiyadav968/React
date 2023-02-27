import React, { useContext } from 'react'
import { dataContext } from './Context/DataProvider';
import { AiOutlineClose } from 'react-icons/ai'
const Cart = () => {
    
    const datas = []
    const { value } = useContext(dataContext);
    let el ={...value}
    datas.push(el)
    console.log(datas)
    
    return (
        <>
            <div className='h-screen  absolute right-0'>
                <div className='h-full w-96 shadow-lg bg-white'>
                    <div className='pt-5'>
                        <div className="flex justify-between px-7">
                            <div className="pb-3">
                                <p className='text-xl'>Shopping cart</p>
                            </div>
                            <div className='text-xl cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                       {datas.map(e=>(
                         <div className=' ml-5 flex'>
                         <div>
                             <img src={e.url} className='border w-28 h-32 p-5 rounded' />
                         </div>
                         <div className='pl-3 pt-1'>
                             <p>{e.name}</p>
                             <p className='pt-20'>Qty 1</p>
                         </div>
                         <div className='right-0'>
                             <p className=''>${e.price}</p>
                         </div>
                     </div>
                       ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;