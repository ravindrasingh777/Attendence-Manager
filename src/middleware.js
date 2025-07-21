import { NextResponse } from "next/server";

export function middleware(request) {
  const user = request.cookies.get("User");
  const Adminuser = request.cookies.get("Admin-User");

  if (!user && request.nextUrl.pathname.startsWith("/user-details")) {
    return NextResponse.redirect(new URL("/user-login", request.url));
  } else if (!Adminuser && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (
    !Adminuser &&
    request.nextUrl.pathname.startsWith("/admin-register")
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (!Adminuser && request.nextUrl.pathname.startsWith("/register")) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (
    !Adminuser &&
    request.nextUrl.pathname.startsWith("/users-attendences")
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/user-details",
    "/users-attendences",
    "/admin",
    "/admin-register",
    "/register",
  ],
};
