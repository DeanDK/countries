import React from "react"
import { NextPage, NextPageContext } from "next"

import { isAuth } from "../utils/isAuth"

const Home: NextPage = ({}) => {
  return <div>Home</div>
}

export default Home

export const getServerSideProps = (ctx: NextPageContext) => {
  isAuth(ctx)
}
