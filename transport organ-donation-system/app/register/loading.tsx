import { Heart } from "lucide-react"

export default function RegisterLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <Heart className="h-12 w-12 text-red-500 mx-auto mb-4 animate-pulse" />
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto mb-4"></div>
        <p className="text-gray-500">Loading registration system...</p>
        <p className="text-sm text-gray-400 mt-2">Initializing transport network...</p>
      </div>
    </div>
  )
}
