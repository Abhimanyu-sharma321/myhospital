import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {
    const navigate = useNavigate()
    // useEffect(() => {
    //     navigate("/login")
    // })
    return (
        <div className='w-96 h-96 ml-96 mt-96' style={{ color: "red" }}> Please Login To Access</div>
    )
}
