"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Heart,
  Search,
  Users,
  Building2,
  Truck,
  BarChart3,
  Shield,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simple validation
    if (!email || !password) {
      alert("Please fill in all fields")
      setIsLoading(false)
      return
    }

    // Simulate login process
    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true")
      localStorage.setItem("userEmail", email)
      router.push("/search")
      setIsLoading(false)
    }, 1000)
  }

  const fillDemoCredentials = (type: "hospital" | "organization" | "coordinator") => {
    const credentials = {
      hospital: {
        email: "dr.smith@metropolitangeneral.com",
        password: "Hospital2024!",
      },
      organization: {
        email: "coordinator@organprocurement.org",
        password: "OrgCoord2024!",
      },
      coordinator: {
        email: "transport@lifeshare.com",
        password: "Transport2024!",
      },
    }

    setEmail(credentials[type].email)
    setPassword(credentials[type].password)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm">
        <div className="flex items-center justify-center">
          <Heart className="h-8 w-8 text-red-500" />
          <span className="ml-2 text-xl font-bold text-gray-900">In-Need</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
            Features
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </header>

      <div className="container px-4 md:px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                Save Lives Through
                <span className="text-red-600 block">Organ Donation</span>
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Connect donors with recipients through our comprehensive organ donation registry. Advanced transport
                coordination, real-time tracking, and seamless hospital integration.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border">
                <Search className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Smart Search</div>
                  <div className="text-sm text-gray-600">Find compatible donors instantly</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border">
                <Truck className="h-6 w-6 text-green-600" />
                <div>
                  <div className="font-semibold text-gray-900">Live Tracking</div>
                  <div className="text-sm text-gray-600">Real-time organ transport</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border">
                <BarChart3 className="h-6 w-6 text-purple-600" />
                <div>
                  <div className="font-semibold text-gray-900">Analytics</div>
                  <div className="text-sm text-gray-600">Comprehensive insights</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border">
                <Shield className="h-6 w-6 text-red-600" />
                <div>
                  <div className="font-semibold text-gray-900">Secure</div>
                  <div className="text-sm text-gray-600">HIPAA compliant platform</div>
                </div>
              </div>
            </div>

            {/* Quick Access Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="/register">
                  <Users className="mr-2 h-4 w-4" />
                  Register New Entity
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#features">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Login Form */}
          <div className="w-full max-w-md mx-auto">
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center text-gray-900">Access Portal</CardTitle>
                <CardDescription className="text-center text-gray-600">
                  Sign in to access the organ donation system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    />
                    <Label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </Label>
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Signing in...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Sign In
                      </>
                    )}
                  </Button>
                </form>

                {/* Demo Credentials */}
                <div className="space-y-3">
                  <div className="text-center text-sm text-gray-500">Demo Credentials</div>
                  <div className="grid grid-cols-1 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => fillDemoCredentials("hospital")}
                      className="text-xs bg-blue-50 hover:bg-blue-100 border-blue-200"
                    >
                      <Building2 className="mr-2 h-3 w-3" />
                      Hospital Staff
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => fillDemoCredentials("organization")}
                      className="text-xs bg-green-50 hover:bg-green-100 border-green-200"
                    >
                      <Users className="mr-2 h-3 w-3" />
                      Organization
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => fillDemoCredentials("coordinator")}
                      className="text-xs bg-purple-50 hover:bg-purple-100 border-purple-200"
                    >
                      <Truck className="mr-2 h-3 w-3" />
                      Transport Coordinator
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Organ Donation Platform</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform provides end-to-end solutions for organ donation management, from donor registration to
              successful transplantation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Search className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Advanced Search</CardTitle>
                <CardDescription>
                  Find compatible donors with advanced filtering by blood type, organ type, location, and medical
                  compatibility.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Truck className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Transport Coordination</CardTitle>
                <CardDescription>
                  Coordinate organ transport with multiple methods including drones, ambulances, and air transport with
                  real-time tracking.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Comprehensive analytics for transport performance, success rates, and system optimization insights.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Multi-Entity Registration</CardTitle>
                <CardDescription>
                  Support for donors, hospitals, and organizations with specialized registration workflows and
                  verification.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Clock className="h-10 w-10 text-orange-600 mb-2" />
                <CardTitle>Real-Time Updates</CardTitle>
                <CardDescription>
                  Live status updates, notifications, and alerts to ensure timely coordination and communication.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-10 w-10 text-indigo-600 mb-2" />
                <CardTitle>Secure & Compliant</CardTitle>
                <CardDescription>
                  HIPAA compliant platform with advanced security measures to protect sensitive medical information.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Making a Difference</h2>
            <p className="text-red-100 max-w-2xl mx-auto">
              Our platform has facilitated thousands of successful organ donations, saving lives across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-red-100">Lives Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-red-100">Partner Hospitals</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-red-100">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-red-100">Support Available</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our platform or need assistance? Our team is here to help 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Phone className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <CardTitle>Phone Support</CardTitle>
                <CardDescription>
                  24/7 emergency hotline
                  <br />
                  <strong className="text-gray-900">1-800-ORGAN-HELP</strong>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Mail className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <CardTitle>Email Support</CardTitle>
                <CardDescription>
                  General inquiries
                  <br />
                  <strong className="text-gray-900">support@in-need.org</strong>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <MapPin className="h-10 w-10 text-red-600 mx-auto mb-4" />
                <CardTitle>Emergency Coordination</CardTitle>
                <CardDescription>
                  Critical transport requests
                  <br />
                  <strong className="text-gray-900">emergency@in-need.org</strong>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container px-4 md:px-6 py-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Heart className="h-6 w-6 text-red-500" />
                <span className="ml-2 text-lg font-bold text-gray-900">In-Need</span>
              </div>
              <p className="text-sm text-gray-600">
                Connecting donors with recipients to save lives through advanced organ donation coordination.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/search" className="hover:text-red-600">
                    Search Donors
                  </Link>
                </li>
                <li>
                  <Link href="/transport" className="hover:text-red-600">
                    Transport
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-red-600">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-red-600">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-red-600">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-red-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600">
                    HIPAA Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 In-Need Organ Donation Registry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
