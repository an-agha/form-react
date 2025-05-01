import style from "../styles/input.module.css"

function Input({ className,label,error, ...props }) {
    return (
        <div className={style.container}>
            <label>
                <span className={style.label}>
                    {label}
                </span>
                <input
                    className={`${style.input} ${className} ${error? style.error : ""}`}
                    {...props}
                />
            </label>
            { error && <span className={style.errorMsg}>{error}</span>}
        </div>
    )
}

export default Input