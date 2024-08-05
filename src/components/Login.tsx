import React from "react"
import { Button } from "@mui/material"
import "./Login.css"
import { auth, provider } from "../utils/firebase"
import { signInWithPopup } from "firebase/auth"

const signIn = () => {
  signInWithPopup(auth, provider).catch(error => alert(error.message))
}

const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0b5061df29d55a92d945_full_logo_blurple_RGB.svg"
          alt=""
          height={96}
        />
      </div>

      <Button onClick={signIn}>Sign in</Button>
    </div>
  )
}

export default Login
