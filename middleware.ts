import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Добавляем заголовки для управления кешем
  // Это поможет Discord и другим соцсетям обновить превью
  // Исключаем sitemap, robots и другие служебные файлы
  const pathname = request.nextUrl.pathname;
  
  if (pathname === "/" && !pathname.includes("sitemap") && !pathname.includes("robots")) {
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/",
    // Исключаем служебные файлы из middleware
    "/((?!sitemap|robots|_next/static|_next/image|favicon.ico|api).*)",
  ],
};

