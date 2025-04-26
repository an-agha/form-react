import { useRef } from "react"
import style from "../styles/Login.module.css"
import Button from "./Button";

function Login({ onSignUp }) {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    const email = useRef()
    const password = useRef()
    console.log("Kinnus");

    const submit = ()=> {
        console.log({
            email: email.current.value,
            password: password.current.value,
        })
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
            <div className={`${style.decorator} ${style.decorator1}`}/>
            <div className={`${style.decorator} ${style.decorator2}`} />
            <div className={`${style.decorator} ${style.decorator3}`} />
            <div className={`${style.decorator} ${style.decorator4}`} />
        </div>
        <div className={style.formSection}>
            <span className={style.formHead}>
                Login
            </span>
            <input 
            type="email" 
            className={style.input} 
            placeholder="Email Address" 
            ref={email}
            // value={email}
            // onChange={({target})=>setEmail(target.value)}
            />
            <input 
            type="password" 
            className={style.input} 
            placeholder="Password" 
            ref={password}
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