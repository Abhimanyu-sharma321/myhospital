import React from 'react'
import logo1 from "../../assets/images/landinglogo.png"
const Step1 = () => {
    return (
        <div className='w-full h-full ml-96'>

            <div className='w-1/2 h-1/2'>

                <img src={logo1} alt='img' width={500} height={500} className='ml-72' />

                <h2 className='font-extrabold text-3xl   outline text-center w-40 text-white bg-sky-600 hover:bg-white hover:text-black hover:outline outline-slate-800' style={{ marginLeft: 450 }} >DOCTOR HUNT</h2>

                <div>
                    <button className='w-80 h-14 border border-slate-900 mt-56 ml-96 bg-sky-600 hover:bg-white hover:text-black'>Next</button>
                </div>

            </div>
        </div>
    )
}

export default Step1