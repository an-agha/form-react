import style from "../styles/button.module.css"

function Button({children,className,...props}) {
    return (
        <button
            {...props}
            className={`${style.button} ${className}`}
            >
            {children}
        </button>
    )
}

export default Button