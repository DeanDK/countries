import { NextPageContext } from "next";
import Cookies from "cookies";

export const isAuth = (ctx: NextPageContext) => {
  const { req, res } = ctx;
  const cookie = new Cookies(req, res);
  const firebaseUser = cookie.get("firebaseUser");

  if (!firebaseUser) {
    res.writeHead(302, { Location: "/login" });
    res.end();
    return { props: {} };
  }

  return { props: { firebaseUser } };
};
