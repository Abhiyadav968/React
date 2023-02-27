import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import Cart from './Cart'
import Munu from './Munu'

const Navbar = () => {
  const [open, setopen] = useState(false)
  const items = useSelector((state) => state.CartReducer.cart)
  const toggle = () => {
    setopen(!open)
  }
  return (
    <>
      <div className='w-full h-16 bg-orange-500 flex justify-between items-center px-20 text-white relative'>
        <div>Abhishek kumar</div>
        <div className='relative'><FaShoppingCart className='text-xl cursor-pointer' onClick={toggle} />
          {items.length <= 0 ? '' : <p className='absolute -top-2 -right-2 w-4 h-4 flex justify-center
           items-center text-xs bg-blue-600 rounded-full'>{items.length}</p>}</div>
        {open === true && <Cart />}
      </div>
      <Munu />
    </>
  )
}

export default Navbar