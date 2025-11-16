"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Heart,
  Hospital,
  Users,
  Search,
  AlertTriangle,
  Building,
  Shield,
  Zap,
  Truck,
  Plane,
  MapPin,
  Clock,
  Navigation,
} from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm">
        <Link href="/" className="flex items-center justify-center">
          <Heart className="h-8 w-8 text-red-500" />
          <span className="ml-2 text-xl font-bold text-gray-900">In-Need</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/search" className="text-sm font-medium hover:underline underline-offset-4">
            Search Donors
          </Link>
          <Link href="/transport" className="text-sm font-medium hover:underline underline-offset-4">
            Transport Hub
          </Link>
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
        </nav>
      </header>

      <div className="container px-4 md:px-6 py-12 max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">In-Need Registration Portal</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced organ donation network with drone delivery, emergency transport coordination, and real-time
            tracking systems.
          </p>
        </div>

        {/* Transport Network Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Zap className="h-8 w-8" />
            <div>
              <h2 className="text-2xl font-bold">Emergency Transport Network Active</h2>
              <p className="text-blue-100">
                Drone fleet ready • Emergency vehicles on standby • Air transport coordinated
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/20 p-3 rounded">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm">Active Drones</div>
            </div>
            <div className="bg-white/20 p-3 rounded">
              <div className="text-2xl font-bold">15min</div>
              <div className="text-sm">Avg Response</div>
            </div>
            <div className="bg-white/20 p-3 rounded">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div className="bg-white/20 p-3 rounded">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Operations</div>
            </div>
          </div>
        </div>

        {/* Registration Options */}
        <div className="grid gap-6 lg:grid-cols-3 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300 border-blue-200 hover:border-blue-400">
            <CardHeader className="text-center">
              <Hospital className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <CardTitle>Register Hospital</CardTitle>
              <CardDescription>Add medical institutions with transport coordination capabilities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-blue-600" />
                  <span>Drone landing pad integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-green-600" />
                  <span>Emergency vehicle coordination</span>
                </div>
                <div className="flex items-center gap-2">
                  <Navigation className="h-4 w-4 text-purple-600" />
                  <span>GPS tracking and routing</span>
                </div>
              </div>
            </CardContent>
            <div className="p-6 pt-0">
              <Link href="/register/hospital">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Register Hospital</Button>
              </Link>
            </div>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-red-200 hover:border-red-400">
            <CardHeader className="text-center">
              <Heart className="h-12 w-12 mx-auto text-red-600 mb-4" />
              <CardTitle>Register Donor</CardTitle>
              <CardDescription>Register donors with transport preference and location data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-red-600" />
                  <span>Location-based matching</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-orange-600" />
                  <span>Time-critical organ tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Plane className="h-4 w-4 text-blue-600" />
                  <span>Transport method optimization</span>
                </div>
              </div>
            </CardContent>
            <div className="p-6 pt-0">
              <Link href="/register/donor">
                <Button className="w-full bg-red-600 hover:bg-red-700">Register Donor</Button>
              </Link>
            </div>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-green-200 hover:border-green-400">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <CardTitle>Register Organization</CardTitle>
              <CardDescription>Add coordination organizations with fleet management access</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-green-600" />
                  <span>Fleet management dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span>Security and compliance tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <span>Emergency response coordination</span>
                </div>
              </div>
            </CardContent>
            <div className="p-6 pt-0">
              <Link href="/register/organization">
                <Button className="w-full bg-green-600 hover:bg-green-700">Register Organization</Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Transport Hub Section */}
        <div className="grid gap-6 lg:grid-cols-2 mb-12">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <Zap className="h-5 w-5" />
                Drone Delivery System
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-purple-700">
                Autonomous drone fleet for critical organ transport with real-time monitoring and temperature control.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border">
                  <div className="text-lg font-bold text-purple-600">50+</div>
                  <div className="text-xs text-purple-700">Active Drones</div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="text-lg font-bold text-purple-600">25km</div>
                  <div className="text-xs text-purple-700">Max Range</div>
                </div>
              </div>
              <Link href="/transport">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Zap className="mr-2 h-4 w-4" />
                  Access Transport Hub
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <Truck className="h-5 w-5" />
                Emergency Transport
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-orange-700">
                Specialized emergency vehicles with life support systems and traffic priority coordination.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border">
                  <div className="text-lg font-bold text-orange-600">24/7</div>
                  <div className="text-xs text-orange-700">Availability</div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="text-lg font-bold text-orange-600">15min</div>
                  <div className="text-xs text-orange-700">Response Time</div>
                </div>
              </div>
              <Link href="/search">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <Search className="mr-2 h-4 w-4" />
                  Search Donors
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access */}
        <Card className="bg-gradient-to-r from-red-600 to-blue-600 text-white">
          <CardHeader>
            <CardTitle className="text-center text-white">Emergency Operations Center</CardTitle>
            <CardDescription className="text-center text-red-100">
              Access critical systems for time-sensitive organ transport and coordination
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/search">
                <Button size="lg" variant="secondary" className="w-full">
                  <Search className="mr-2 h-4 w-4" />
                  Emergency Search
                </Button>
              </Link>
              <Link href="/transport">
                <Button size="lg" variant="secondary" className="w-full">
                  <Navigation className="mr-2 h-4 w-4" />
                  Transport Hub
                </Button>
              </Link>
              <Link href="/transport/analytics">
                <Button size="lg" variant="secondary" className="w-full">
                  <Building className="mr-2 h-4 w-4" />
                  Analytics Dashboard
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
