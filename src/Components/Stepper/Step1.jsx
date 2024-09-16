import React from 'react'
import logo1 from "../../assets/images/landinglogo.png"
import ButtonComponent from '../../Common/ButtonComponent'
const Step1 = (props) => {
    const { handleNext, handleBack } = props
    return (
        <div className='w-full h-full text-center content-center ml-[500px]'>

            <div className='w-1/2 h-1/2 pt-52 pb-10'>

                <img src={logo1} alt='img' width={300} height={300} className='ml-72' />

                <h2 className='font-extrabold text-3xl   outline text-center w-40 text-white ' style={{ marginLeft: 450 }} >DOCTOR HUNT</h2>
            </div>
            <div>
                <button className='w-80 h-14 border border-slate-900 mt-56  bg-sky-600 hover:bg-white hover:text-black' onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default Step1