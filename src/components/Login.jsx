import { useRef, useState } from "react"
import style from "../styles/Login.module.css"
import Button from "./Button";
import Input from "./Input";

 const EMAIL_REGEX = /^[^@]+@[^@]+\.[^@]+$/

function Login({ onSignUp }) {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    const email = useRef()
    const password = useRef()

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })

    const validate = ({email,password}) => {
        setErrors({
            email: "",
            password: "",
        })
        if(!email){
            setErrors((errors)=> {
                return {
                    ...errors,
                    email: "Email required",
                }
            })
        } else if (!EMAIL_REGEX.test(email)) {
            setErrors((errors) => {
                return {
                    ...errors,
                    email: "Invalid email"
                }
            })
        }
        if(!password) {
            setErrors((errors)=>{
                return {
                    ...errors,
                    password: "Password required"
                }
            })
        }
    }

    const submit = () => {
       const emailValue = email.current.value
       const passwordValue = password.current.value
        validate({
            email:emailValue,
            password:passwordValue,
        })
        console.log(errors)
    }

    return (
        <div className={style.container}>
            <div className={style.msgSection}>
                <span className={style.heading}>
                    Hi, Friend
                </span>
                <span className={style.subHeading}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis esse culpa quasi ratione debitis consectetur dolorem corrupti? Quaerat, quo nulla.
                </span>
                <div className={`${style.decorator} ${style.decorator1}`} />
                <div className={`${style.decorator} ${style.decorator2}`} />
                <div className={`${style.decorator} ${style.decorator3}`} />
                <div className={`${style.decorator} ${style.decorator4}`} />
            </div>
            <div className={style.formSection}>
                <span className={style.formHead}>
                    Login
                </span>
                <Input
                    type="email"
                    placeholder="Email Address"
                    ref={email}
                    error={errors.email}
                    label="Email"
                // value={email}
                // onChange={({target})=>setEmail(target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    ref={password}
                    label="Password"
                    error={errors.password}
                // value={password}
                // onChange={({target})=>setPassword(target.value)}
                />
                <Button
                    onClick={submit}>
                    Login
                </Button>
                <span className={style.switchMsg}>
                    Don't have an account?
                    <button
                        className={style.btnGhost}
                        onClick={onSignUp}
                    >
                        Sign Up
                    </button>
                    Here
                </span>
            </div>
        </div>
    )
}

export default Login