import React from 'react'
import doctorImage from "../../assets/images/stepper1doctorImage.jpg"
const Step2 = (props) => {
    const sameClass = "w-80 h-20 border text-white bg-slate-800  border-slate-800 hover:bg-white hover:text-black mt-10  "
    const { handleNext, handleBack } = props
    return (
        <div className='w-full h-screen '>
            <div style={{ marginLeft: 600 }} >
                <img src={doctorImage} alt='imag' style={{ borderRadius: 400, border: "groove", width: 400, height: 400 }} className='bg-slate-800' />
                </div>
            <div className='ml-80'>
                <p className='w-800 text-2xl font-bold mt-16 ml-96' >

                    Find Trusted Doctors
                </p>
            </div>
            <div className='w-full h-full gap-28 flex  -ml-96' style={{ marginLeft: 400 }}>
                <button className={sameClass} onClick={handleBack}> Back</button>

            </div>      

        </div>

    )
}

export default Step2        