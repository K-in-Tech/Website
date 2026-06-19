import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",

  // pages
  "/blogs(.*)",
  "/leaderboard(.*)",

  // APIs
  "/api/blogs(.*)",
  "/api/leaderboard(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // allow public routes
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  // protect private routes
  if (!userId) {
    const signInUrl = new URL("/sign-in", req.url);

    signInUrl.searchParams.set(
      "redirect_url",
      req.url
    );

    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next
     * - static files
     * - images
     */
    "/((?!_next|.*\\..*).*)",
    "/api/(.*)",
  ],
};