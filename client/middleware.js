import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
 
export function middleware(request) {

  const currentUser = cookies().get('refreshToken')?.value
 
  if (!currentUser && request.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
  
}
 
export const config = {
  matcher: ['/sell'],
}
