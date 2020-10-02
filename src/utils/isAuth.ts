import { NextPageContext } from "next";
import Cookies from "cookies";

import { redirect } from "./redirect";

export const isAuth = (ctx: NextPageContext) => {
  const { req, res } = ctx;
  const cookie = new Cookies(req, res);
  const firebaseUser = cookie.get("firebaseUser");

  if (!firebaseUser) {
    redirect("/login", ctx);
    return { props: {} };
  }

  return { props: { firebaseUser } };
};
