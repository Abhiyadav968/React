import { useState } from 'react';
import './App.css';
import Stepper from './Componentes/Stepper';
import StepperControl from './Componentes/StepperControl';

import Account from './Componentes/Steps/Account'
import Details from './Componentes/Steps/Details'
import Final from './Componentes/Steps/Final'
import Payment from './Componentes/Steps/Payment'

function App() {
  
  const [currentStep, setCurrentStep] = useState(1)
  const steps = [
    "Account Information",
    "Personal Details",
    "Complete"
  ]

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />
      case 2:
        return <Details />
      case 3:
        return <Final />
        default:
    }
  }

  return (
    <>
      <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
        <div className='container horizontal mt-5'>
          <Stepper 
          steps = {steps}
          currentStep= {currentStep}
          />
        </div>
        <StepperControl />
      </div>
    </>
  );
}

export default App;
