import React, { act } from 'react'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import WithStepperHoc from '../../HOC/WithStepper';
import ButtonComponent from '../../Common/ButtonComponent';
import Step4 from './Step4';

const MainStepper = (props) => {
    const { activeStep, handleNext, handleBack } = props;
    // switch (activeStep) {
    //     case activeStep === 0: return <Step1 handleNext={handleNext} />
    //         break;
    //     case activeStep === 1: <Step2 />
    //         break;
    //     case activeStep === 3: <Step3 />
    //         break;
    //     default:
    // }


    if (activeStep === 1) {
        return <Step1  {...{ handleBack, handleNext }} />
    }
    if (activeStep === 2) {
        return <Step2 {...{ handleBack, handleNext }} />
    }
    if (activeStep === 3) {
        return <Step3{...{ handleBack, handleNext }} />
    }
    if(activeStep === 4) {
        return <Step4  {...{ handleBack, handleNext }} />
    }

    return (
        <div className='mt-96 ml-96'>

            <div className='flex gap-10 ml-96'>

                <button onClick={handleNext} className='w-52 h-10 border border-black bg-sky-950 text-white font-mono hover:bg-white hover:text-black '>Next</button>
                <button onClick={handleBack}

                    className='w-52 h-10 border border-black bg-sky-950 text-white font-mono hover:bg-white hover:text-black '
                >Back</button>
            </div>
        </div>
    )
}

export default WithStepperHoc(MainStepper)