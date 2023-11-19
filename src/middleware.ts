import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_FILE = /\.(.*)$/;

const UNPROTECTED_PATHS = ["/login", "/signup"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (
    pathname.startsWith("/_next") || // exclude Next.js internals
    pathname.startsWith("/api") || //  exclude all API routes
    pathname.startsWith("/static") || // exclude static files
    PUBLIC_FILE.test(pathname) || // exclude all files in the public folder
    pathname.length === 1 // exclude the root path
  ) {
    return NextResponse.next();
  }

  function redirected(url: string) {
    return NextResponse.redirect(new URL(url, req.url));
  }

  const encodedText = new TextEncoder().encode(
    process?.env?.JWT_SECRET ?? "DEV"
  );
  const filtered = UNPROTECTED_PATHS.filter((path) =>
    pathname.startsWith(path)
  );
  const accessToken = req.cookies?.get("token")?.value ?? "";
  try {
    await jwtVerify(accessToken, encodedText);

    if (filtered.length) return redirected("/");
  } catch (error) {
    if (!filtered.length) return redirected("/login");
  }

  return NextResponse.next();
}
