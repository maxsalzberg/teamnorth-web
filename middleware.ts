import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Добавляем заголовки для управления кешем
  // Это поможет Discord и другим соцсетям обновить превью
  if (request.nextUrl.pathname === "/") {
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );
  }

  return response;
}

export const config = {
  matcher: "/",
};

