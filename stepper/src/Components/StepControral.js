import React from 'react'

const StepControral = ({ setCount, count }) => {
    return (
        <>
            <div className='flex gap-[100px] justify-center pt-5'>
                <div>
                    <button className='border py-1 px-8 rounded-xl font-semibold gap-5 text-white
                     hover:bg-gray-600 bg-gray-700' onClick={() => setCount((e) => count === 0 ? count = 0 : e - 1)}>Back</button>
                </div>
                <div>
                    <button className='border py-1 px-8 rounded-xl font-semibold bg-indigo-800
                     hover:bg-indigo-700 text-white' onClick={() => setCount((e) => count === 3 ? count = 3 : e + 1)}>Next</button>
                </div>
            </div>
        </>
    )
}

export default StepControral;