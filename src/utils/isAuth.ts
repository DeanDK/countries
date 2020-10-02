import { NextPageContext } from "next";
import Cookies from "cookies";

export const isAuth = (ctx: NextPageContext) => {
  const cookie = new Cookies(ctx.req, ctx.res);
  const firebaseUser = cookie.get("firebaseUser");

  if (!firebaseUser) {
    ctx.res.writeHead(302, { Location: "/login" });
    ctx.res.end();
    return { props: {} };
  }

  return { props: { firebaseUser } };
};
