import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname;
  const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1" || hostname.startsWith("192.168.") || hostname.startsWith("10.");

  if (
    request.nextUrl.protocol === "http:" &&
    process.env.NODE_ENV === "production" &&
    !isLocalhost
  ) {
    const httpsUrl = request.nextUrl.clone();
    httpsUrl.protocol = "https:";
    return NextResponse.redirect(httpsUrl, 301);
  }

  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;
  
  if (pathname === "/") {
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );
  }

  if (process.env.NODE_ENV === "production" && !isLocalhost) {
    response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }

  return response;
}

export const config = {
  matcher: [
    "/",
    "/((?!sitemap|robots|_next/static|_next/image|favicon.ico|api).*)",
  ],
};

