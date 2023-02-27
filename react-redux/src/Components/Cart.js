import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {MdDelete} from 'react-icons/md'
import { Remove } from '../Redux/action/action'

const Cart = () => {

  const items = useSelector((state)=>state.CartReducer.cart)
  const dispatch =useDispatch()

  console.log(items)
  return (
    <div className='absolute top-16 right-0'>
        <div className="w-96 h-[89vh] bg-gray-300 flex flex-col gap-2 items-center pt-2">
        {items.map(e=>(
            <div key={e.name} className="w-32 p-2 bg-red-400 rounded-md text-white flex items-center justify-between">
                {e.name}<MdDelete className='text-xl cursor-pointer' onClick={()=>dispatch(Remove(e.name))}/></div>
        ))}
        </div>
    </div>
  )
}

export default Cart