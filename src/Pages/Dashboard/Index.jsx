import React from 'react'
import WelcomeImage from "../../assets/images/Hospital.png"
import helth from "../../assets/images/HelthCare.png"
const Index = () => {

    let options = ["Emergencey Service", "HeartOperation", "kidenyReplacement"]

    return (
        <div className='w-full h-full '>

            <section className='w-full h-full border border-black '>

                <img src={WelcomeImage} alt="" className="w-full h-full" />

                <button className='w-72 h-16 bg-slate-900 ml-[800px] text-white hover:bg-blue-600 hover:border border-black hover:text-white'>Book Now</button>
            </section>
            <section className='w-full h-full border border-black '>
                <h2>We Provide </h2>
                <img src={helth} alt='hospital' className=' ' />


            </section>

        </div>
    )
}

export default Index