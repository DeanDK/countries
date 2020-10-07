import React from "react"
import NextHead from "next/head"
import { NextPage } from "next"

import Login from "../presentation/modules/Login"

const LoginPage: NextPage = () => {
  return (
    <>
      <NextHead>
        <title>Login</title>
      </NextHead>
      <Login />
    </>
  )
}

export default LoginPage
