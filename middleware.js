import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware called", request);
  return NextResponse.next(request);
}

export const config = {
  matcher: "/news",
};
