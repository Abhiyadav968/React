import React, { useState } from 'react'
import { Stepper } from 'react-form-stepper';
import Form from './Form';
import StepControral from './StepControral';

const Steppers = () => {

    const [Count, setCount] = useState(0)
    console.log(Count)
    return (
        <>
            <div className='flex justify-center'>
                <div className='text-center w-[750px] h-full py-5 rounded-lg border pb-5 bg-white shadow-md mt-8'>
                    <Stepper
                        steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }]}
                        activeStep={Count}
                    />
                    <Form />
                    <StepControral setCount={setCount} count={Count} />
                </div>
            </div>
        </>
    )
}

export default Steppers