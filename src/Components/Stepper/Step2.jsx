import React from 'react'
import doctorImage from "../../assets/images/stepper1doctorImage.jpg"
const Step2 = ({ src = "" }) => {
    return (
        <div className='w-full h-screen bg-slate-700 '>
            <div style={{ marginLeft: 600 }} >
                <img src={doctorImage} alt='imag' style={{ borderRadius: 400, border: "groove", width: 400, height: 400 }} className='bg-slate-800' />
            </div>
            <div className='ml-80'>
                <p className='w-800 text-2xl font-bold mt-16 ml-96' >

                    Find Trusted Doctors
                </p>
            </div>
            <div className='w-full h-full' style={{ marginLeft: 800 }}>
                <button className='w-80 h-20 border text-white bg-slate-800  border-slate-800 hover:bg-white hover:text-black mt-10 -ml-24'>Next</button>
            </div>
        </div>

    )
}

export default Step2    