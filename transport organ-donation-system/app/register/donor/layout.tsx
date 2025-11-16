import type React from "react"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default function DonorRegistrationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Server-side authentication check
  const cookieStore = cookies()
  const isAuthenticated = cookieStore.get("isAuthenticated")?.value === "true"
  const userRole = cookieStore.get("userRole")?.value

  // If not authenticated or not authorized, redirect to login
  if (!isAuthenticated) {
    redirect("/login?message=Authentication+required")
  }

  // Only admin, hospital and organization roles can access donor registration
  if (userRole !== "admin" && userRole !== "hospital" && userRole !== "organization") {
    redirect("/login?message=Unauthorized+access")
  }

  return <>{children}</>
}
