import React from 'react'
import Login from '../Login/Login'

const Step4 = (props) => {
    const { handleNext, handleBack } = props
    return (
        <div>
            <Login />
            <div className="flex gap-56">
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default Step4