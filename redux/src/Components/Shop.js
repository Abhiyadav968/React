import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../State/index'

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount)
  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        {/* <div onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}} className='bg-indigo-500 px-6 py-1 text-white h-10 text-2xl cursor-pointer'>-</div>
        BUY NOW
        <div onClick={()=>{dispatch(actionCreators.depositMoney(100))}} className='bg-indigo-500 px-6 py-1 text-white h-10 text-2xl cursor-pointer'>+</div> */}
        <div onClick={() => { withdrawMoney(100) }} className='bg-indigo-500 px-6 py-1 text-white h-10 text-2xl cursor-pointer'>-</div>
        BUY NOW{balance}
        <div onClick={() => { depositMoney(100) }} className='bg-indigo-500 px-6 py-1 text-white h-10 text-2xl cursor-pointer'>+</div>
      </div>
    </>
  )
}

export default Shop