// lib/profile-route.ts

export function getProfileRoute(
  profileClerkId: string,
  profileUserId: string,
  currentClerkId?: string | null
) {
  if (profileClerkId === currentClerkId) {
    return "/dashboard";
  }

  return `/u/${profileUserId}`;
}