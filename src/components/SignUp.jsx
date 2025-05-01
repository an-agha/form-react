import { useRef, useState } from "react"
import style from "../styles/Login.module.css"
import Button from "./Button"
import Input from "./Input"

 const EMAIL_REGEX = /^[^@]+@[^@]+\.[^@]+$/

function SignUp({onLogin}) {
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()

    const validate = ({name,email,password,confirmPassword}) => {
        setErrors({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",

        })
        if(!name){
            setErrors((errors)=> {
                return {
                    ...errors,
                    name: "Name required",
                }
            })
        }
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
        if(!confirmPassword){
            setErrors((errors)=> {
                return {
                    ...errors,
                    confirmPassword: "Confirm Password ",
                }
            })
        } else if (password !== confirmPassword) {
            setErrors(()=>{
                return {
                    ...errors,
                    confirmPassword: "Password is not matching"
                }
            })
        }
        console.log(errors)
    }

    const submit = () => {
        const nameValue = name.current.value
        const emailValue = email.current.value
       const passwordValue = password.current.value
       const confirmPasswordValue = confirmPassword.current.value
        validate({
            name: nameValue,
            email:emailValue,
            password:passwordValue,
            confirmPassword: confirmPasswordValue,


        })
        console.log({
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            confirmPassword: confirmPassword.current.value,
        })
    }

    return (
        <div>
            <div className={style.container}>
                <div className={style.formSection}>
                    <span className={style.formHead}>
                        Sign Up
                    </span>
                    <Input
                        type="text"
                        placeholder="Name"
                        label="Name"
                        error={errors.name}
                        // value={name}
                        // onChange={({ target }) => setName(target.value)}
                        ref={name}
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        label="Email"
                        error={errors.email}
                        // value={email}
                        // onChange={({ target }) => setEmail(target.value)}
                        ref={email}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        label="Password"
                        error={errors.password}
                        // value={password}
                        // onChange={({ target }) => setPassword(target.value)}
                        ref={password}
                    />
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        label="Confirm Password"
                        error={errors.confirmPassword}
                        // value={confirmPassword}
                        // onChange={({ target }) => setConfirmPassword(target.value)}
                        ref={confirmPassword}
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