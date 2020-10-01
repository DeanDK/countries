import { NextPageContext } from "next"
import firebaseClient from "../firebase"

export const isAuth = (ctx: NextPageContext) => {
  const activeUser = firebaseClient.user

  if (!activeUser) {
    ctx.res.writeHead(302, { Location: "/login" })
    ctx.res.end()
    return
  }

  return { props: {} }
}
