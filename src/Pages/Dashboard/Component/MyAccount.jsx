import { TextField } from '@mui/material'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const MyAccount = () => {


    const USER_DETAIL = localStorage.getItem("userDetail")
    let info = JSON.parse(USER_DETAIL)

    console.log(info, "USERDETAIL")
    return (
        <div className='w-full h-full'>

            <div className='align-super w-full h-full'>

                <FaUser className=' w-96 h-40' style={{ marginLeft: 600 }} />
            </div>


            <div className='w-full h-full border grid grid-cols-3 gap-16 ml-10 mt-20'>
                <div style={{ marginBottom: 20 }}>

                    <TextField id=" name" label="Name" variant="standard" className='text-center font-extralight w-96' value={info?.name} />

                </div>
                <div style={{ marginBottom: 20 }}>

                    <TextField id="lastName" label="LastName" variant="standard" className='text-center font-extralight w-96' value={info?.lastName} />

                </div>

                <div style={{ marginBottom: 20 }}>

                    <TextField id="address" label="Address" variant="standard" className='text-center font-extralight w-96' value={info?.address} />

                </div>
                <div>
                    <TextField id="Phone-No." label="Phone-No." variant="standard" className='text-center font-extralight w-96' value={info?.phoneNo} />

                </div>
                <div>

                    <TextField id=" Email" label="Email" variant="standard" className='text-center font-extralight w-96' value={info?.email} />
                </div>
                <div>

                    <TextField id="standard-basic" label="Standard" variant="standard" className='text-center font-extralight w-96' value={info?.password} />
                </div>
            </div>
            <div className='flex gap-6 ' >

                <Link to={"/register"} >
                    <button className='w-96 h-16 bg-blue-800 text-white  font-bold mt-24 hover:bg-white hover:text-black hover:border border-black hover:font-sans hover:scale-110' style={{ marginLeft: 500 }}> Back</button>
                </Link>


                <button className='w-96 h-16 bg-blue-800 text-white  font-bold mt-24 hover:bg-white hover:text-black hover:border border-black hover:font-sans hover:scale-110' >Save</button>



            </div>
        </div>


    )
}

export default MyAccount