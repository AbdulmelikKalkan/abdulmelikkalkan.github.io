import { NextResponse, NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("hola")
  console.log(request.url)
  return NextResponse.redirect(new URL('/about', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/cv',
}