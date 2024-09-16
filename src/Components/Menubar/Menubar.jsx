import React from 'react'
import { FaFile, FaFolderClosed } from 'react-icons/fa6'
import { IoIosContacts, IoIosFilm, IoIosHome, IoIosPerson } from 'react-icons/io'
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'
const Menubar = () => {
  return (
    <div className='w-1/2  h-screen '  >
      <div className='w-1/6 h-screen bg-slate-800 text-white gap-y-11 cursor-pointer '>
        <div>
          {/* <div> <img src={logo} width={300} height={300} />  </div> */}
        </div>
        <div className='mb-20'>
          <div>

            <Link to={"/myaccount"} >
              <IoIosPerson className='w-52 h-16  hover:text-blue-800 ' />
            </Link>

          </div>

        </div>
        <div className='mb-20'>

          <IoIosContacts className='w-52 h-16  hover:text-blue-800' />
        </div>
        <div className='mb-20'>

          <IoIosFilm className='w-52 h-16  hover:text-blue-800' /></div>
        <div className='mb-20'>
          <FaFolderClosed className='w-52 h-16  hover:text-blue-800' />
        </div>
        <div className='mb-20'>
          <FaFile className='w-52 h-16  hover:text-blue-800' />
        </div>


      </div>


    </div>
  )
}

export default Menubar