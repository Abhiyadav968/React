import React, { useState } from 'react'
// import { RxEyeOpen } from 'react-icons/rx'

const Form = () => {
  const [useerr, setUseerr] = useState(false)
  function loginSubmit(e) {
    alert("Hello")
    e.prevenDefault()
  }

  function userHandler(e) {
    let item = e.target.value
    if (item.length < 3) {
      setUseerr(true)
    }else{
      setUseerr(false)
    }
    // console.warn(e.target.value.length)
  }

  return (
    <>
      <form onSubmit={loginSubmit}>
        <div className=' text-center'>
          <input type="email" name='email' className='border outline-none w-[60%] h-9 rounded-xl pl-5'
            placeholder='Enter your email' onChange={userHandler} />
          {useerr ? <p>User is not valid</p> : null}
          <div className='relative'>
            <input type="password" className='border outline-none w-[60%] h-9 rounded-xl pl-5 mt-3'
              placeholder='Enter your password'/>
            {/* <RxEyeOpen className='absolute right-24 top-6 mr-16 cursor-pointer text-gray-600' /> */}
          </div>
        </div>
        {/* <button>submit</button> */}
      </form>
    </>
  )
};

export default Form