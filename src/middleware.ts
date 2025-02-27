import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  });

  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // If user is not logged in and trying to access a protected route
  if (!token && (path.startsWith('/terms') || path.startsWith('/dashboard'))) {
    const url = new URL('/auth/login', request.url);
    url.searchParams.set('callbackUrl', path);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/terms/:path*', '/dashboard/:path*']
};