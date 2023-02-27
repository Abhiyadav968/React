import React from 'react'
import {IoMdBasket} from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { Cart } from '../Redux/action/action'
const Munu = () => {
    const data = [
    {name:"Rahul"},
    {name:"abhi"},
    {name:"raj"},
    {name:"sujeet"},
    ]
    const dispatch =useDispatch()
  return (
    <div className='w-full flex justify-center gap-5 mt-5'>
        {data.map(e=>(
            <div key={e.name} className="w-32 p-2 bg-red-400 rounded-md text-white flex items-center justify-between">
                {e.name}<IoMdBasket className='text-xl cursor-pointer' onClick={()=>dispatch(Cart(e))}/></div>
        ))}
    </div>
  )
}

export default Munu