import React from 'react'

const ButtonComponent = ({ label = "", className = '', id = "", disabled = false, onclick = "", type = "submit", Children }) => {
    return (
        <button label={label} className={className} onClick={onclick}>
            {Children}
        </button>
    )
}

export default ButtonComponent