import { useState } from "react"

function WithStepperHoc(Component) {


    function WithHocProps(props) {

        const [activeStep, setActiveStep] = useState(1)


        const handleNext = () => {
            setActiveStep((prev) => prev < 4 ? prev + 1 : prev)

        }
        const handleBack = () => {

            setActiveStep((prev) => prev > 0 ? prev - 1 : prev)

        }

        console.log(activeStep, "active in hoc ")

        return (
            <Component {...{ activeStep, setActiveStep, handleBack, handleNext }} />
        )
    }
    return WithHocProps;



}
export default WithStepperHoc;