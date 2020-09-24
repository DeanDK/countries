import React from "react"

import Input from "../../components/Input/Input"
import { LoginContainer } from "./Login.styles"

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <Input label='Username'></Input>
      <Input label='Password'></Input>
    </LoginContainer>
  )
}

export default Login
