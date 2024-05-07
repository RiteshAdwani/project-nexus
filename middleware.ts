import authConfig from "@/auth.config";
import NextAuth from "next-auth";

const {auth} = NextAuth(authConfig);

import {
  DEFAULT_LOGIN_REDIRECT,
  apiRoutePrefix,
  publicRoutes,
  authRoutes
} from "@/routes";


export default auth((req):any => {

  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  console.log("ROUTE:",nextUrl.pathname)
  const isApiRoute = nextUrl.pathname.startsWith(apiRoutePrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  // console.log(nextUrl.pathname," next path name ");
  // console.log(isPublicRoute," isPublicRoute");
  // console.log(isLoggedIn," isLoggedIn ")
  // console.log("in middleware")

  // if(!isLoggedIn && isPublicRoute){
  //   return Response.redirect(
  //     new URL("/auth/login", nextUrl)
  //   );
  // }

  if(isPublicRoute) return
  if (isApiRoute) return;

  if (isAuthRoute) {
    if (isLoggedIn) {
      console.log("buggggg")
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(
      new URL("/", nextUrl)
    );
  }
  return;
});

// // Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
