import React from 'react'
import { FaUserNurse } from 'react-icons/fa6'

const index = () => {
    return (
        <div className='w-full h-full'   >
            <div className='w-full border border-solid border-black   text-white h-32 text-center  outline-white ring-offset-4  bg-sky-600  pb-10 cursor-pointer '>
                <ol className='flex gap-72 ml-10 font-bold text-white '>

                    <li>About us</li>
                    <li>Find a doctor</li>
                    <li>My Reports</li>
                    <li>Book an Appoinment</li>
                    <li>
                        My Account
                    </li>

                </ol>
            </div>


        </div>
    )
}

export default index