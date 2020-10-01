import React from "react"
import NextHead from "next/head"
import { NextPage } from "next"

import Login from "../modules/Login/Login"
import firebaseClient from "../firebase"

const LoginPage: NextPage = () => {
  console.log(firebaseClient.getUser())
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
