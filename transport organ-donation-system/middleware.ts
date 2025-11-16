import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Remove all authentication checks - allow all routes
  return NextResponse.next()
}

// Disable middleware matching - no protected routes
export const config = {
  matcher: [],
}
