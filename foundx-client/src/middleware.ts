import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

type TRole = keyof typeof rolebasedRoutes;

const AuthRoutes = ["/login", "/register"];
const rolebasedRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Mock user data for testing
  const user = {
    name: "Shanto Islam",
    email: "shantoislam123@gmail.com",
    token: "kansdkanj",
    role: "USER",
  };

  // If user is not authenticated, allow access only to AuthRoutes
  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
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
  matcher: ["/profile", "/admin", "/login", "/register"],
};
