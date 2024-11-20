import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { currentUser } from "./services/AuthServices";

type TRole = keyof typeof rolebasedRoutes;

const AuthRoutes = ["/login", "/register"];
const rolebasedRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = await currentUser();
  // console.log(user);

  // If user is not authenticated, allow access only to AuthRoutes
  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  // If user is authenticated, check if their role allows access to the requested route
  if (user?.role && rolebasedRoutes[user?.role as TRole]) {
    const routes = rolebasedRoutes[user?.role as TRole];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  // Redirect authenticated users without access permissions to the home page
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/profile", "/profile/:page*", "/admin", "/login", "/register"],
};
