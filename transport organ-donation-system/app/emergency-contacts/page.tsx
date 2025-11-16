import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Hospital, Phone, MapPin, AlertTriangle, Clock, Users } from "lucide-react"
import Link from "next/link"
import { AuthStatus } from "@/components/auth-status"

export default function EmergencyContactsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white">
        <Link href="/" className="flex items-center justify-center">
          <Heart className="h-8 w-8 text-red-500" />
          <span className="ml-2 text-xl font-bold text-gray-900">In-Need</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <AuthStatus />
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
            Secure Access
          </Link>
        </nav>
      </header>

      <div className="container px-4 md:px-6 py-12 max-w-6xl mx-auto">
        {/* Emergency Banner */}
        <div className="bg-red-600 text-white p-6 rounded-lg mb-8">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="h-8 w-8" />
            <h1 className="text-3xl font-bold">Emergency Hospital Contacts</h1>
          </div>
          <p className="text-red-100 text-lg">
            For immediate medical emergencies requiring organ transplant, contact these verified hospitals directly. All
            hospitals listed have 24/7 emergency services and transplant capabilities.
          </p>
        </div>

        {/* National Emergency Numbers */}
        <Card className="mb-8 border-red-200">
          <CardHeader className="bg-red-50">
            <CardTitle className="flex items-center gap-2 text-red-800">
              <Phone className="h-5 w-5" />
              National Emergency Numbers
            </CardTitle>
            <CardDescription>Call these numbers for immediate emergency assistance</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-3xl font-bold text-red-600">108</div>
                <div className="text-sm text-red-800">Emergency Ambulance</div>
                <div className="text-xs text-red-600">Free - Available 24/7</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-3xl font-bold text-red-600">102</div>
                <div className="text-sm text-red-800">Medical Emergency</div>
                <div className="text-xs text-red-600">Free - Medical Help</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-3xl font-bold text-red-600">1950</div>
                <div className="text-sm text-red-800">NOTTO Helpline</div>
                <div className="text-xs text-red-600">Organ Donation Info</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-3xl font-bold text-red-600">1066</div>
                <div className="text-sm text-red-800">Organ Helpline</div>
                <div className="text-xs text-red-600">24/7 Support</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hospital Contacts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center mb-8">Major Transplant Centers - India</h2>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* AIIMS Delhi */}
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Hospital className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-xl">AIIMS New Delhi</CardTitle>
                </div>
                <CardDescription>All India Institute of Medical Sciences - Premier Medical Institution</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">Ansari Nagar, Aurobindo Marg</p>
                    <p className="text-sm text-gray-600">New Delhi - 110029, India</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span className="font-mono">+91-11-2658-8500</span>
                    <span className="text-xs text-green-700">(Main)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-red-50 rounded">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="font-mono font-bold">+91-11-2658-8911</span>
                    <span className="text-xs text-red-700">(Emergency)</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-medium text-blue-900 mb-1">Transplant Services:</h4>
                  <p className="text-sm text-blue-800">Heart, Liver, Kidney, Lung, Pancreas, Cornea</p>
                </div>
              </CardContent>
            </Card>

            {/* Apollo Chennai */}
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Hospital className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-xl">Apollo Hospitals Chennai</CardTitle>
                </div>
                <CardDescription>Leading Multi-Specialty Hospital Chain</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">21, Greams Lane, Off Greams Road</p>
                    <p className="text-sm text-gray-600">Chennai - 600006, Tamil Nadu</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span className="font-mono">+91-44-2829-3333</span>
                    <span className="text-xs text-green-700">(Main)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-red-50 rounded">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="font-mono font-bold">+91-44-2829-3911</span>
                    <span className="text-xs text-red-700">(Emergency)</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-medium text-blue-900 mb-1">Transplant Services:</h4>
                  <p className="text-sm text-blue-800">Heart, Liver, Kidney, Bone Marrow, Cornea</p>
                </div>
              </CardContent>
            </Card>

            {/* Fortis Gurugram */}
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Hospital className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-xl">Fortis Healthcare Gurugram</CardTitle>
                </div>
                <CardDescription>Super Specialty Hospital</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">Sector 44, Opposite HUDA City Centre</p>
                    <p className="text-sm text-gray-600">Gurugram - 122002, Haryana</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span className="font-mono">+91-124-496-2200</span>
                    <span className="text-xs text-green-700">(Main)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-red-50 rounded">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="font-mono font-bold">+91-124-496-2911</span>
                    <span className="text-xs text-red-700">(Emergency)</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-medium text-blue-900 mb-1">Transplant Services:</h4>
                  <p className="text-sm text-blue-800">Heart, Liver, Kidney, Lung Transplant</p>
                </div>
              </CardContent>
            </Card>

            {/* Manipal Bangalore */}
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Hospital className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-xl">Manipal Hospital Bangalore</CardTitle>
                </div>
                <CardDescription>Multi-Specialty Medical Center</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">98, Rustum Bagh, Airport Road</p>
                    <p className="text-sm text-gray-600">Bangalore - 560017, Karnataka</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span className="font-mono">+91-80-2502-4444</span>
                    <span className="text-xs text-green-700">(Main)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-red-50 rounded">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="font-mono font-bold">+91-80-2502-4911</span>
                    <span className="text-xs text-red-700">(Emergency)</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-medium text-blue-900 mb-1">Transplant Services:</h4>
                  <p className="text-sm text-blue-800">Kidney, Liver, Bone Marrow, Cornea</p>
                </div>
              </CardContent>
            </Card>

            {/* Medanta Gurugram */}
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Hospital className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-xl">Medanta - The Medicity</CardTitle>
                </div>
                <CardDescription>Multi Super Specialty Hospital</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">Sector 38, Near Subhash Chowk</p>
                    <p className="text-sm text-gray-600">Gurugram - 122001, Haryana</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span className="font-mono">+91-124-414-1414</span>
                    <span className="text-xs text-green-700">(Main)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-red-50 rounded">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="font-mono font-bold">+91-124-414-1911</span>
                    <span className="text-xs text-red-700">(Emergency)</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-medium text-blue-900 mb-1">Transplant Services:</h4>
                  <p className="text-sm text-blue-800">Heart, Liver, Kidney, Lung, Multi-organ</p>
                </div>
              </CardContent>
            </Card>

            {/* Kokilaben Mumbai */}
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Hospital className="h-6 w-6 text-red-600" />
                  <CardTitle className="text-xl">Kokilaben Hospital Mumbai</CardTitle>
                </div>
                <CardDescription>Dhirubhai Ambani Hospital & Medical Research Institute</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium">Rao Saheb Achutrao Patwardhan Marg</p>
                    <p className="text-sm text-gray-600">Four Bunglows, Mumbai - 400053</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span className="font-mono">+91-22-4269-6969</span>
                    <span className="text-xs text-green-700">(Main)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-red-50 rounded">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="font-mono font-bold">+91-22-4269-6911</span>
                    <span className="text-xs text-red-700">(Emergency)</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-medium text-blue-900 mb-1">Transplant Services:</h4>
                  <p className="text-sm text-blue-800">Heart, Liver, Kidney, Lung, Pancreas</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Important Instructions */}
        <Card className="mt-8 border-yellow-200 bg-yellow-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-800">
              <Clock className="h-5 w-5" />
              Important Emergency Instructions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-yellow-900 mb-2">Before Calling:</h4>
                <ul className="space-y-1 text-yellow-800">
                  <li>• Have patient's medical details ready</li>
                  <li>• Know the required organ type</li>
                  <li>• Prepare blood type information</li>
                  <li>• Have hospital referral if available</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-yellow-900 mb-2">When Calling:</h4>
                <ul className="space-y-1 text-yellow-800">
                  <li>• Clearly state "ORGAN TRANSPLANT EMERGENCY"</li>
                  <li>• Provide patient's current location</li>
                  <li>• Mention urgency level (critical/urgent)</li>
                  <li>• Ask for transplant coordinator</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regional Contacts */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Regional Organ Donation Organizations
            </CardTitle>
            <CardDescription>Contact these organizations for organ donation coordination and support</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">NOTTO (National Level)</h4>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm">
                    <strong>National Organ & Tissue Transplant Organisation</strong>
                  </p>
                  <p className="text-sm text-blue-700">Safdarjung Hospital Campus, New Delhi</p>
                  <p className="text-sm font-mono">+91-11-2670-4994</p>
                  <p className="text-sm font-mono text-red-600">Helpline: 1950</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">MOHAN Foundation</h4>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm">
                    <strong>Multi Organ Harvesting Aid Network</strong>
                  </p>
                  <p className="text-sm text-green-700">267-B, TTK Road, Alwarpet, Chennai</p>
                  <p className="text-sm font-mono">+91-44-2498-0443</p>
                  <p className="text-sm font-mono text-red-600">Emergency: +91-44-2498-0911</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link href="/">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Heart className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
