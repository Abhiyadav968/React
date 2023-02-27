import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const amount = useSelector(state => state.amount)
  return (
    <>
        <div className='w-full h-[65px] bg-indigo-600 flex justify-between items-center text-white px-20'>
          <div>Abhishek kumar ray</div>
          <div className=''><button disabled="disabled">Your amount is: {amount}</button></div>
    </div>
    </>
  )
}

export default Navbar