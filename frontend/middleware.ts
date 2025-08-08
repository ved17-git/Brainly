import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
const publicPaths=['/signUp', '/login', '/']

export async function middleware(req:NextRequest){

    const cookieStore=await cookies()
    const token=cookieStore.get("token")?.value
    const pathName=req.nextUrl.pathname

    if(!token && !publicPaths.includes(pathName)){
        return NextResponse.redirect(new URL('/', req.url))
    }

    if(token && publicPaths.includes(pathName)){
        return NextResponse.redirect(new URL('/dashboard',req.url))
    }

    return NextResponse.next()

}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}