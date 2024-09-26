import React from 'react'
import useBookDoctor from '../../Hooks/BookDoctor'

const Book = () => {
    const { doctorArray } = useBookDoctor()
    return (

        <div className='w-full h-full    '>
            <div className='w-full h-full'>
                {

                    doctorArray.map((item) => (
                        <div className="w-full  h-full mb-10  shadow  mt-10 flex gap-80">
                            <div>Name-{item.name}</div>
                            <div>Profile-{item.Profile}</div>
                            <div>Fees/hour-{item.fees}</div>
                            <div className='w-[300px] h-[50px ]border border-black   '>
                                <button className='border border-black  w-full h-10 bg-sky-900 hover:bg-white text-black hover:text-blue-950 '>Book</button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Book