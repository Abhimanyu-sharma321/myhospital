import React from 'react'
import { FaUserNurse } from 'react-icons/fa6'

const index = () => {
    return (
        <div className='mb-0'   >
            <div className='w-full border border-solid border-black bg-black text-white h-20 text-center  outline-white ring-offset-4 hover:bg-white hover:text-black 6'>
                <ol className='flex gap-96 ml-10'>

                    <li>Home </li>
                    <li>About </li>
                    <li>Contact   </li>
                    <li> Login</li>
                    <li>
                        <FaUserNurse className='w-14 h-14' />
                    </li>

                </ol>
            </div>


        </div>
    )
}

export default index