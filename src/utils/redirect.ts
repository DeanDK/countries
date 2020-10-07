import Router from "next/router"
import { NextPageContext } from "next"

export const redirect = (target: string, context?: NextPageContext) => {
  if (context?.res) {
    // Server, 303: "See other"
    context.res.writeHead(303, { Location: target })
    context.res.end()
  } else {
    Router.replace(target)
  }
}
