import { useState } from "react"
import style from "../styles/Login.module.css"
import Button from "./Button"

function SignUp({onLogin}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const submit = () => {
        console.log({
            name,
            email,
            password,
            confirmPassword,
        })
    }

    return (
        <div>
            <div className={style.container}>
                <div className={style.formSection}>
                    <span className={style.formHead}>
                        Sign Up
                    </span>
                    <input
                        type="text"
                        className={style.input}
                        placeholder="Name"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                    <input
                        type="email"
                        className={style.input}
                        placeholder="Email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                    <input
                        type="password"
                        className={style.input}
                        placeholder="Password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                    <input
                        type="password"
                        className={style.input}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={({ target }) => setConfirmPassword(target.value)}
                    />
                    <Button
                        onClick={submit}>
                        Sign up
                    </Button>
                    <span>
                        Already have an account? 
                        <button 
                            className={style.btnGhost}
                            onClick={onLogin}
                        >
                            Sign In
                        </button> 
                        Here
                    </span>
                </div>
                <div className={style.msgSection}>
                    <span className={style.heading}>
                        Hi, Friend
                    </span>
                    <span className={style.subHeading}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis esse culpa quasi ratione debitis consectetur dolorem corrupti? Quaerat, quo nulla.
                    </span>
                </div>

            </div>
        </div>
    )
}

export default SignUp