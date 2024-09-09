import Register from "../Register/Register"

const Step3 = (props) => {
         const { handleNext, handleBack } = props
    return (
        <div>
            <Register />
            <div className="flex gap-56">
                <button onClick={handleNext}>Next</button>
                <button onClick={handleBack}>Back</button>
                <button onClick={handleBack}>Back</button>
            </div>
        </div>


    )

}

export default Step3