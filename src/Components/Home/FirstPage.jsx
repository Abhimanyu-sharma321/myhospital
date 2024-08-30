import React from 'react'
import Menubar from '../Menubar/Menubar'

const FirstPage = () => {
    return (
        <div className='w-full h-full flex'>
            <div className='w-1/12 bg-slate-900 text-white'>
                <Menubar />
            </div>
            <div className='w-1/2   border-solid   mt-3 ml-3'>

                <p>hello</p>
            </div>
            {/* <div className='w-1/2 border border-solid border-black shadow-2xl shadow-slate-800'>

                    <p>hiii</p>

                </div> */}



        </div>
    )
}

export default FirstPage