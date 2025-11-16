"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Heart, Search, MapPin, Phone, Clock, AlertTriangle, Hospital, Zap, Truck, Plane } from "lucide-react"
import Link from "next/link"

// Mock donor data with transport information
const mockDonors = [
  {
    id: "D001",
    name: "John D.",
    age: 28,
    bloodType: "O+",
    location: "New York, NY",
    distance: "2.3 miles",
    organs: ["Heart", "Liver", "Kidneys"],
    lastUpdated: "2 hours ago",
    emergencyContact: "+1-555-0123",
    status: "Available",
    hospital: "Metropolitan General Hospital",
    hospitalContact: "+1-212-555-0100",
    assignedDoctor: "Dr. Sarah Johnson",
    medicalClearance: "Approved",
    donorType: "deceased",
    transportMethod: "Drone",
    estimatedDelivery: "25 minutes",
    organViability: {
      Heart: { hours: 4, remaining: 2.5 },
      Liver: { hours: 10, remaining: 7.2 },
      Kidneys: { hours: 36, remaining: 31.5 },
    },
  },
  {
    id: "D002",
    name: "Priya S.",
    age: 29,
    bloodType: "AB+",
    location: "Mumbai, Maharashtra",
    distance: "3.2 km",
    organs: ["Heart", "Lungs", "Corneas"],
    lastUpdated: "30 minutes ago",
    emergencyContact: "+91-98765-43210",
    status: "Critical",
    hospital: "Kokilaben Hospital",
    hospitalContact: "+91-22-4269-6969",
    assignedDoctor: "Dr. Santosh Shetty",
    medicalClearance: "Approved",
    donorType: "deceased",
    transportMethod: "Emergency Vehicle",
    estimatedDelivery: "18 minutes",
    organViability: {
      Heart: { hours: 4, remaining: 3.5 },
      Lungs: { hours: 6, remaining: 5.5 },
      Corneas: { hours: 120, remaining: 118 },
    },
  },
  {
    id: "D003",
    name: "Michael C.",
    age: 42,
    bloodType: "B+",
    location: "Los Angeles, CA",
    distance: "8.1 miles",
    organs: ["Heart", "Kidneys"],
    lastUpdated: "45 minutes ago",
    emergencyContact: "+1-323-555-0789",
    status: "Critical",
    hospital: "St. Mary's Transplant Center",
    hospitalContact: "+1-323-555-0200",
    assignedDoctor: "Dr. Michael Chen",
    medicalClearance: "Approved",
    donorType: "deceased",
    transportMethod: "Air Transport",
    estimatedDelivery: "35 minutes",
    organViability: {
      Heart: { hours: 4, remaining: 0.5 },
      Kidneys: { hours: 36, remaining: 24 },
    },
  },
]

export default function SearchPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [searchFilters, setSearchFilters] = useState({
    organType: "",
    bloodType: "",
    location: "",
    urgencyLevel: "",
    transportMethod: "",
  })
  const [filteredDonors, setFilteredDonors] = useState(mockDonors)
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const isAuth = localStorage.getItem("isAuthenticated") === "true"

    if (!isAuth) {
      router.push("/")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleSearch = () => {
    let filtered = mockDonors

    if (searchFilters.organType && searchFilters.organType !== "all") {
      filtered = filtered.filter((donor) =>
        donor.organs.some((organ) => organ.toLowerCase().includes(searchFilters.organType.toLowerCase())),
      )
    }

    if (searchFilters.bloodType && searchFilters.bloodType !== "all") {
      filtered = filtered.filter((donor) => donor.bloodType === searchFilters.bloodType)
    }

    if (searchFilters.urgencyLevel && searchFilters.urgencyLevel !== "all") {
      if (searchFilters.urgencyLevel === "critical") {
        filtered = filtered.filter((donor) => donor.status === "Critical")
      }
    }

    if (searchFilters.transportMethod && searchFilters.transportMethod !== "all") {
      filtered = filtered.filter((donor) => donor.transportMethod === searchFilters.transportMethod)
    }

    setFilteredDonors(filtered)
  }

  const getTransportIcon = (method: string) => {
    switch (method) {
      case "Drone":
        return <Zap className="h-4 w-4 text-purple-600" />
      case "Emergency Vehicle":
        return <Truck className="h-4 w-4 text-red-600" />
      case "Air Transport":
        return <Plane className="h-4 w-4 text-blue-600" />
      default:
        return <MapPin className="h-4 w-4 text-gray-600" />
    }
  }

  const getViabilityColor = (remaining: number, total: number) => {
    const percentage = (remaining / total) * 100
    if (percentage > 50) return "text-green-600"
    if (percentage > 25) return "text-yellow-600"
    return "text-red-600"
  }

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Heart className="h-12 w-12 text-red-500 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-500">Loading search system...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white">
        <Link href="/" className="flex items-center justify-center">
          <Heart className="h-8 w-8 text-red-500" />
          <span className="ml-2 text-xl font-bold text-gray-900">In-Need</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/search" className="text-sm font-medium hover:underline underline-offset-4 text-red-600">
            Search Donors
          </Link>
          <Link href="/transport" className="text-sm font-medium hover:underline underline-offset-4">
            Transport
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              localStorage.clear()
              router.push("/")
            }}
          >
            Logout
          </Button>
        </nav>
      </header>

      <div className="container px-4 md:px-6 py-8 max-w-7xl mx-auto">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Emergency Donor Search</h1>
          <p className="text-gray-600">Find compatible organ donors with advanced transport coordination</p>
        </div>

        {/* Search Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search Filters
            </CardTitle>
            <CardDescription>Filter donors by organ type, blood type, location, and transport method</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
              <div className="space-y-2">
                <Label>Organ Type</Label>
                <Select onValueChange={(value) => setSearchFilters({ ...searchFilters, organType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Organs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Organs</SelectItem>
                    <SelectItem value="heart">Heart</SelectItem>
                    <SelectItem value="liver">Liver</SelectItem>
                    <SelectItem value="kidneys">Kidneys</SelectItem>
                    <SelectItem value="lungs">Lungs</SelectItem>
                    <SelectItem value="corneas">Corneas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Blood Type</Label>
                <Select onValueChange={(value) => setSearchFilters({ ...searchFilters, bloodType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="O+">O+</SelectItem>
                    <SelectItem value="O-">O-</SelectItem>
                    <SelectItem value="A+">A+</SelectItem>
                    <SelectItem value="A-">A-</SelectItem>
                    <SelectItem value="B+">B+</SelectItem>
                    <SelectItem value="B-">B-</SelectItem>
                    <SelectItem value="AB+">AB+</SelectItem>
                    <SelectItem value="AB-">AB-</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Location</Label>
                <Input
                  placeholder="Enter city or region"
                  value={searchFilters.location}
                  onChange={(e) => setSearchFilters({ ...searchFilters, location: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label>Urgency Level</Label>
                <Select onValueChange={(value) => setSearchFilters({ ...searchFilters, urgencyLevel: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Transport Method</Label>
                <Select onValueChange={(value) => setSearchFilters({ ...searchFilters, transportMethod: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Methods" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Methods</SelectItem>
                    <SelectItem value="Drone">Drone Delivery</SelectItem>
                    <SelectItem value="Emergency Vehicle">Emergency Vehicle</SelectItem>
                    <SelectItem value="Air Transport">Air Transport</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={handleSearch} className="w-full bg-red-600 hover:bg-red-700">
              <Search className="mr-2 h-4 w-4" />
              Search Donors
            </Button>
          </CardContent>
        </Card>

        {/* Search Results */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Search Results ({filteredDonors.length} donors found)</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="h-4 w-4" />
              <span>Last updated: {new Date().toLocaleTimeString()}</span>
            </div>
          </div>

          {filteredDonors.map((donor) => (
            <Card key={donor.id} className="border-l-4 border-l-red-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {donor.name} ({donor.age} years)
                      <Badge variant={donor.status === "Critical" ? "destructive" : "secondary"}>{donor.status}</Badge>
                    </CardTitle>
                    <CardDescription>
                      Blood Type: {donor.bloodType} • {donor.location} • {donor.distance} away
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      {getTransportIcon(donor.transportMethod)}
                      <span>{donor.transportMethod}</span>
                    </div>
                    <div className="text-sm font-medium text-green-600">ETA: {donor.estimatedDelivery}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Available Organs */}
                <div>
                  <h4 className="font-medium mb-2">Available Organs:</h4>
                  <div className="flex flex-wrap gap-2">
                    {donor.organs.map((organ) => (
                      <Badge key={organ} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                        {organ}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Organ Viability */}
                {donor.organViability && (
                  <div>
                    <h4 className="font-medium mb-2">Organ Viability:</h4>
                    <div className="space-y-2">
                      {Object.entries(donor.organViability).map(([organ, data]) => (
                        <div key={organ} className="flex items-center justify-between">
                          <span className="text-sm">{organ}</span>
                          <div className="flex items-center gap-2">
                            <Progress value={(data.remaining / data.hours) * 100} className="w-24 h-2" />
                            <span className={`text-sm font-medium ${getViabilityColor(data.remaining, data.hours)}`}>
                              {data.remaining.toFixed(1)}h remaining
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Separator />

                {/* Hospital Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Hospital className="h-4 w-4" />
                      Hospital Information
                    </h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>
                        <strong>Hospital:</strong> {donor.hospital}
                      </p>
                      <p>
                        <strong>Doctor:</strong> {donor.assignedDoctor}
                      </p>
                      <p>
                        <strong>Clearance:</strong>
                        <Badge variant="secondary" className="ml-1 bg-green-100 text-green-800">
                          {donor.medicalClearance}
                        </Badge>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Emergency Contacts
                    </h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>
                        <strong>Hospital:</strong> {donor.hospitalContact}
                      </p>
                      <p>
                        <strong>Emergency:</strong> {donor.emergencyContact}
                      </p>
                      <p>
                        <strong>Updated:</strong> {donor.lastUpdated}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button className="bg-red-600 hover:bg-red-700">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Request Organ
                  </Button>
                  <Button variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Hospital
                  </Button>
                  <Link href="/transport">
                    <Button variant="outline">
                      <MapPin className="mr-2 h-4 w-4" />
                      Arrange Transport
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
