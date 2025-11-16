"use client"

import type React from "react"

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Remove authentication checks - allow direct access
  return <>{children}</>
}
