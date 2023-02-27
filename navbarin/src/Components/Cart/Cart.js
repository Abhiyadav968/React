import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const items = useSelector(state => state.cart)
  console.log(items)
  return (
    <>
      <div className="w-[400px] h-screen bg-orange-100 right-0 absolute top-[70px]">
         
      </div>
    </>
  )
}

export default Cart