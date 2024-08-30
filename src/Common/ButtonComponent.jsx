import React from 'react'

const ButtonComponent = ({ label = "", className = '', id = "", disabled = false, onclick = "", type = "submit", Children }) => {
    return (
        <button label={label} className={className}  >

            {Children}
        </button>
    )
}

export default ButtonComponent