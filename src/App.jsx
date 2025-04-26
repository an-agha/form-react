import style from "./styles/app.module.css"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import { useState } from "react"


function App() {
  const [isLogin, setIsLogin] = useState(true)

  const toggleLogin= ()=> {
    setIsLogin(!isLogin)
  }

  return (
    <div className={style.container}>
      {isLogin ? <Login onSignUp={toggleLogin} /> : <SignUp onLogin={toggleLogin} />}
    </div>
  )
}

export default App