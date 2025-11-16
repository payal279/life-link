"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  MapPin,
  Clock,
  Plane,
  Truck,
  Zap,
  Hospital,
  Building2,
  Route,
  Timer,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Navigation,
  BarChart3,
  Eye,
  RefreshCw,
} from "lucide-react"
import Link from "next/link"

// Mock data for hospitals and organizations
const hospitals = [
  {
    id: "H001",
    name: "Metropolitan General Hospital",
    location: "New York, NY",
    address: "1234 Medical Center Dr, New York, NY 10001",
    contact: "+1-212-555-0100",
    type: "hospital",
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: "H002",
    name: "St. Mary's Transplant Center",
    location: "Los Angeles, CA",
    address: "5678 Healthcare Blvd, Los Angeles, CA 90210",
    contact: "+1-323-555-0200",
    type: "hospital",
    coordinates: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: "H003",
    name: "Kokilaben Dhirubhai Ambani Hospital",
    location: "Mumbai, Maharashtra",
    address: "Rao Saheb Achutrao Patwardhan Marg, Mumbai 400053",
    contact: "+91-22-4269-6969",
    type: "hospital",
    coordinates: { lat: 19.076, lng: 72.8777 },
  },
  {
    id: "H004",
    name: "All India Institute of Medical Sciences",
    location: "New Delhi, Delhi",
    address: "Sri Aurobindo Marg, New Delhi 110029",
    contact: "+91-11-2658-8500",
    type: "hospital",
    coordinates: { lat: 28.6139, lng: 77.209 },
  },
  {
    id: "H005",
    name: "Mayo Clinic",
    location: "Rochester, MN",
    address: "200 First St SW, Rochester, MN 55905",
    contact: "+1-507-284-2511",
    type: "hospital",
    coordinates: { lat: 44.0225, lng: -92.4699 },
  },
  {
    id: "H006",
    name: "Johns Hopkins Hospital",
    location: "Baltimore, MD",
    address: "1800 Orleans St, Baltimore, MD 21287",
    contact: "+1-410-955-5000",
    type: "hospital",
    coordinates: { lat: 39.297, lng: -76.5929 },
  },
  {
    id: "H007",
    name: "Cleveland Clinic",
    location: "Cleveland, OH",
    address: "9500 Euclid Ave, Cleveland, OH 44195",
    contact: "+1-216-444-2200",
    type: "hospital",
    coordinates: { lat: 41.5034, lng: -81.6234 },
  },
  {
    id: "H008",
    name: "Massachusetts General Hospital",
    location: "Boston, MA",
    address: "55 Fruit St, Boston, MA 02114",
    contact: "+1-617-726-2000",
    type: "hospital",
    coordinates: { lat: 42.3631, lng: -71.0685 },
  },
  {
    id: "H009",
    name: "Cedars-Sinai Medical Center",
    location: "Los Angeles, CA",
    address: "8700 Beverly Blvd, Los Angeles, CA 90048",
    contact: "+1-310-423-3277",
    type: "hospital",
    coordinates: { lat: 34.0759, lng: -118.3772 },
  },
  {
    id: "H010",
    name: "Houston Methodist Hospital",
    location: "Houston, TX",
    address: "6565 Fannin St, Houston, TX 77030",
    contact: "+1-713-790-3311",
    type: "hospital",
    coordinates: { lat: 29.7097, lng: -95.3984 },
  },
  {
    id: "H011",
    name: "Apollo Hospitals",
    location: "Chennai, Tamil Nadu",
    address: "21 Greams Lane, Chennai 600006",
    contact: "+91-44-2829-3333",
    type: "hospital",
    coordinates: { lat: 13.0827, lng: 80.2707 },
  },
  {
    id: "H012",
    name: "Fortis Healthcare",
    location: "Gurgaon, Haryana",
    address: "Sector 44, Gurgaon 122002",
    contact: "+91-124-496-2200",
    type: "hospital",
    coordinates: { lat: 28.4595, lng: 77.0266 },
  },
]

const organizations = [
  {
    id: "O001",
    name: "National Organ Procurement Center",
    location: "Chicago, IL",
    address: "9876 Donation Way, Chicago, IL 60601",
    contact: "+1-312-555-0300",
    type: "organization",
    coordinates: { lat: 41.8781, lng: -87.6298 },
  },
  {
    id: "O002",
    name: "Regional Tissue Bank",
    location: "Houston, TX",
    address: "4321 Medical Plaza, Houston, TX 77001",
    contact: "+1-713-555-0400",
    type: "organization",
    coordinates: { lat: 29.7604, lng: -95.3698 },
  },
  {
    id: "O003",
    name: "LifeShare Transplant Donor Services",
    location: "Shreveport, LA",
    address: "2510 Bert Kouns Industrial Loop, Shreveport, LA 71118",
    contact: "+1-318-222-2404",
    type: "organization",
    coordinates: { lat: 32.4654, lng: -93.7954 },
  },
  {
    id: "O004",
    name: "Gift of Life Donor Program",
    location: "Philadelphia, PA",
    address: "401 N 3rd St, Philadelphia, PA 19123",
    contact: "+1-215-557-8090",
    type: "organization",
    coordinates: { lat: 39.9612, lng: -75.1449 },
  },
  {
    id: "O005",
    name: "Organ Procurement Organization of Michigan",
    location: "Ann Arbor, MI",
    address: "2240 W Huron Pkwy, Ann Arbor, MI 48103",
    contact: "+1-734-973-1333",
    type: "organization",
    coordinates: { lat: 42.2808, lng: -83.743 },
  },
  {
    id: "O006",
    name: "California Transplant Donor Network",
    location: "Oakland, CA",
    address: "1611 Telegraph Ave, Oakland, CA 94612",
    contact: "+1-510-444-8500",
    type: "organization",
    coordinates: { lat: 37.8044, lng: -122.2712 },
  },
  {
    id: "O007",
    name: "National Organ & Tissue Transplant Organisation",
    location: "New Delhi, Delhi",
    address: "Safdarjung Hospital Campus, New Delhi 110029",
    contact: "+91-11-2673-1039",
    type: "organization",
    coordinates: { lat: 28.5706, lng: 77.2085 },
  },
  {
    id: "O008",
    name: "Zonal Transplant Coordination Centre",
    location: "Mumbai, Maharashtra",
    address: "KEM Hospital, Parel, Mumbai 400012",
    contact: "+91-22-2410-7000",
    type: "organization",
    coordinates: { lat: 19.0176, lng: 72.8562 },
  },
]

const organTypes = [
  { value: "heart", label: "Heart", viabilityHours: 4, priority: "Critical" },
  { value: "liver", label: "Liver", viabilityHours: 10, priority: "High" },
  { value: "kidneys", label: "Kidneys", viabilityHours: 36, priority: "Medium" },
  { value: "lungs", label: "Lungs", viabilityHours: 6, priority: "Critical" },
  { value: "pancreas", label: "Pancreas", viabilityHours: 18, priority: "Medium" },
  { value: "corneas", label: "Corneas", viabilityHours: 120, priority: "Low" },
]

const transportMethods = [
  {
    id: "drone",
    name: "Drone Delivery",
    icon: Zap,
    description: "Fast, automated delivery for short distances",
    maxDistance: 50,
    avgSpeed: 60,
    availability: "24/7",
    weatherDependent: true,
    color: "purple",
  },
  {
    id: "ambulance",
    name: "Emergency Ambulance",
    icon: Truck,
    description: "Ground transport with medical support",
    maxDistance: 500,
    avgSpeed: 45,
    availability: "24/7",
    weatherDependent: false,
    color: "red",
  },
  {
    id: "air",
    name: "Air Transport",
    icon: Plane,
    description: "Helicopter or aircraft for long distances",
    maxDistance: 2000,
    avgSpeed: 200,
    availability: "Limited hours",
    weatherDependent: true,
    color: "blue",
  },
]

export default function TransportPage() {
  const [transportRequest, setTransportRequest] = useState({
    organType: "",
    pickupLocation: "",
    dropLocation: "",
    transportMethod: "",
    urgency: "standard",
    specialInstructions: "",
    recipientInfo: "",
    contactPerson: "",
    contactPhone: "",
  })
  const [estimatedDetails, setEstimatedDetails] = useState<any>(null)
  const [activeTransports, setActiveTransports] = useState([
    {
      id: "T001",
      organ: "Heart",
      from: "Metropolitan General Hospital",
      to: "St. Mary's Transplant Center",
      method: "Air Transport",
      status: "In Transit",
      eta: "45 minutes",
      progress: 65,
      trackingId: "AIR-2024-001",
      currentLocation: { lat: 37.7749, lng: -100.4194 },
      route: [
        { lat: 40.7128, lng: -74.006 },
        { lat: 39.7749, lng: -86.4194 },
        { lat: 37.7749, lng: -100.4194 },
        { lat: 34.0522, lng: -118.2437 },
      ],
    },
    {
      id: "T002",
      organ: "Kidneys",
      from: "Regional Tissue Bank",
      to: "Metropolitan General Hospital",
      method: "Drone Delivery",
      status: "Preparing",
      eta: "25 minutes",
      progress: 15,
      trackingId: "DRN-2024-002",
      currentLocation: { lat: 29.7604, lng: -95.3698 },
      route: [
        { lat: 29.7604, lng: -95.3698 },
        { lat: 32.7767, lng: -85.3698 },
        { lat: 36.7767, lng: -78.3698 },
        { lat: 40.7128, lng: -74.006 },
      ],
    },
    {
      id: "T003",
      organ: "Liver",
      from: "Johns Hopkins Hospital",
      to: "Cleveland Clinic",
      method: "Emergency Ambulance",
      status: "In Transit",
      eta: "2 hours 15 minutes",
      progress: 42,
      trackingId: "AMB-2024-003",
      currentLocation: { lat: 40.2, lng: -79.5 },
      route: [
        { lat: 39.297, lng: -76.5929 },
        { lat: 40.2, lng: -79.5 },
        { lat: 41.5034, lng: -81.6234 },
      ],
    },
  ])
  const [selectedTransport, setSelectedTransport] = useState<string | null>(null)

  const calculateEstimate = () => {
    if (!transportRequest.pickupLocation || !transportRequest.dropLocation || !transportRequest.transportMethod) {
      return
    }

    const pickup = [...hospitals, ...organizations].find((loc) => loc.id === transportRequest.pickupLocation)
    const drop = hospitals.find((loc) => loc.id === transportRequest.dropLocation)
    const method = transportMethods.find((m) => m.id === transportRequest.transportMethod)
    const organ = organTypes.find((o) => o.value === transportRequest.organType)

    if (pickup && drop && method && organ) {
      // Calculate distance (simplified calculation)
      const distance =
        Math.sqrt(
          Math.pow(pickup.coordinates.lat - drop.coordinates.lat, 2) +
            Math.pow(pickup.coordinates.lng - drop.coordinates.lng, 2),
        ) * 111 // Rough conversion to km

      const travelTime = (distance / method.avgSpeed) * 60 // in minutes
      const totalTime = travelTime + 30 // add 30 min for preparation

      setEstimatedDetails({
        pickup,
        drop,
        method,
        organ,
        distance: Math.round(distance),
        travelTime: Math.round(travelTime),
        totalTime: Math.round(totalTime),
        viabilityRemaining: organ.viabilityHours * 60 - totalTime,
      })
    }
  }

  const submitTransportRequest = () => {
    const newTransportId = "T" + String(Date.now()).slice(-3)
    const trackingId =
      transportRequest.transportMethod.toUpperCase().slice(0, 3) + "-2024-" + String(Date.now()).slice(-3)

    // Create new transport with tracking
    const pickup = [...hospitals, ...organizations].find((loc) => loc.id === transportRequest.pickupLocation)
    const drop = hospitals.find((loc) => loc.id === transportRequest.dropLocation)

    if (pickup && drop) {
      const newTransport = {
        id: newTransportId,
        organ: organTypes.find((o) => o.value === transportRequest.organType)?.label || "Unknown",
        from: pickup.name,
        to: drop.name,
        method: transportMethods.find((m) => m.id === transportRequest.transportMethod)?.name || "Unknown",
        status: "Preparing",
        eta: estimatedDetails ? `${estimatedDetails.totalTime} minutes` : "Calculating...",
        progress: 5,
        trackingId: trackingId,
        currentLocation: pickup.coordinates,
        route: [pickup.coordinates, drop.coordinates],
      }

      setActiveTransports((prev) => [...prev, newTransport])
      setSelectedTransport(newTransportId)
    }

    alert(`Transport request submitted successfully! Tracking ID: ${trackingId}`)

    // Reset form
    setTransportRequest({
      organType: "",
      pickupLocation: "",
      dropLocation: "",
      transportMethod: "",
      urgency: "standard",
      specialInstructions: "",
      recipientInfo: "",
      contactPerson: "",
      contactPhone: "",
    })
    setEstimatedDetails(null)
  }

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTransports((prev) =>
        prev.map((transport) => {
          if (transport.status === "In Transit" && transport.progress < 95) {
            return {
              ...transport,
              progress: Math.min(transport.progress + Math.random() * 3, 95),
            }
          }
          return transport
        }),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getTransportIcon = (method: string) => {
    switch (method) {
      case "Drone Delivery":
        return <Zap className="h-4 w-4 text-purple-600" />
      case "Emergency Ambulance":
        return <Truck className="h-4 w-4 text-red-600" />
      case "Air Transport":
        return <Plane className="h-4 w-4 text-blue-600" />
      default:
        return <MapPin className="h-4 w-4 text-gray-600" />
    }
  }

  const TrackingMap = ({ transport }: { transport: any }) => {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 border-2 border-dashed border-blue-200">
        <div className="text-center mb-4">
          <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
          <h3 className="text-lg font-semibold text-gray-900">Live Transport Tracking</h3>
          <p className="text-sm text-gray-600">Real-time location and route visualization</p>
        </div>

        <div className="space-y-4">
          {/* Route Progress */}
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Route Progress</span>
              <span className="text-sm text-gray-600">{transport.progress.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${transport.progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Pickup</span>
              <span>Current Location</span>
              <span>Destination</span>
            </div>
          </div>

          {/* Current Status */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">Current Status</div>
              <div className="font-semibold text-green-600">{transport.status}</div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">ETA</div>
              <div className="font-semibold text-blue-600">{transport.eta}</div>
            </div>
          </div>

          {/* Location Coordinates */}
          <div className="bg-white rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-2">Current Coordinates</div>
            <div className="font-mono text-sm">
              Lat: {transport.currentLocation.lat.toFixed(4)}, Lng: {transport.currentLocation.lng.toFixed(4)}
            </div>
          </div>

          {/* Route Waypoints */}
          <div className="bg-white rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-2">Route Waypoints</div>
            <div className="space-y-1">
              {transport.route.map((point: any, index: number) => (
                <div key={index} className="flex items-center gap-2 text-xs">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      index === 0 ? "bg-green-500" : index === transport.route.length - 1 ? "bg-red-500" : "bg-blue-500"
                    }`}
                  ></div>
                  <span className="font-mono">
                    {point.lat.toFixed(2)}, {point.lng.toFixed(2)}
                  </span>
                  {index === 0 && <span className="text-green-600">(Start)</span>}
                  {index === transport.route.length - 1 && <span className="text-red-600">(End)</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Transport Method Info */}
          <div className="bg-white rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              {getTransportIcon(transport.method)}
              <span className="font-medium">{transport.method}</span>
            </div>
            <div className="text-xs text-gray-600">
              Tracking ID: <span className="font-mono bg-gray-100 px-1 rounded">{transport.trackingId}</span>
            </div>
          </div>
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
          <Link href="/search" className="text-sm font-medium hover:underline underline-offset-4">
            Search Donors
          </Link>
          <Link href="/transport" className="text-sm font-medium hover:underline underline-offset-4 text-red-600">
            Transport
          </Link>
          <Link href="/transport/analytics" className="text-sm font-medium hover:underline underline-offset-4">
            <BarChart3 className="h-4 w-4 inline mr-1" />
            Analytics
          </Link>
          <Link href="/register" className="text-sm font-medium hover:underline underline-offset-4">
            Register
          </Link>
        </nav>
      </header>

      <div className="container px-4 md:px-6 py-8 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <Route className="h-8 w-8 text-red-500" />
            Organ Transportation Hub
          </h1>
          <p className="text-gray-600">Coordinate organ pickup and delivery with real-time tracking</p>
        </div>

        <Tabs defaultValue="request" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="request">New Transport Request</TabsTrigger>
            <TabsTrigger value="tracking">Live Tracking</TabsTrigger>
          </TabsList>

          {/* Transport Request Tab */}
          <TabsContent value="request">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Transport Request Form */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Navigation className="h-5 w-5" />
                      New Transport Request
                    </CardTitle>
                    <CardDescription>Schedule organ transport between facilities</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Organ Selection */}
                    <div className="space-y-2">
                      <Label>Organ Type *</Label>
                      <Select
                        value={transportRequest.organType}
                        onValueChange={(value) => setTransportRequest({ ...transportRequest, organType: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select organ type" />
                        </SelectTrigger>
                        <SelectContent>
                          {organTypes.map((organ) => (
                            <SelectItem key={organ.value} value={organ.value}>
                              <div className="flex items-center justify-between w-full">
                                <span>{organ.label}</span>
                                <Badge variant="outline" className="ml-2">
                                  {organ.viabilityHours}h viability
                                </Badge>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Pickup Location */}
                    <div className="space-y-2">
                      <Label>Pickup Location *</Label>
                      <Select
                        value={transportRequest.pickupLocation}
                        onValueChange={(value) => setTransportRequest({ ...transportRequest, pickupLocation: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select pickup location" />
                        </SelectTrigger>
                        <SelectContent>
                          <div className="px-2 py-1 text-xs font-medium text-gray-500 uppercase">Hospitals</div>
                          {hospitals.map((hospital) => (
                            <SelectItem key={hospital.id} value={hospital.id}>
                              <div className="flex items-center gap-2">
                                <Hospital className="h-4 w-4 text-blue-500" />
                                <div>
                                  <div className="font-medium">{hospital.name}</div>
                                  <div className="text-xs text-gray-500">{hospital.location}</div>
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                          <div className="px-2 py-1 text-xs font-medium text-gray-500 uppercase mt-2">
                            Organizations
                          </div>
                          {organizations.map((org) => (
                            <SelectItem key={org.id} value={org.id}>
                              <div className="flex items-center gap-2">
                                <Building2 className="h-4 w-4 text-green-500" />
                                <div>
                                  <div className="font-medium">{org.name}</div>
                                  <div className="text-xs text-gray-500">{org.location}</div>
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Drop Location */}
                    <div className="space-y-2">
                      <Label>Delivery Hospital *</Label>
                      <Select
                        value={transportRequest.dropLocation}
                        onValueChange={(value) => setTransportRequest({ ...transportRequest, dropLocation: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select delivery hospital" />
                        </SelectTrigger>
                        <SelectContent>
                          {hospitals.map((hospital) => (
                            <SelectItem key={hospital.id} value={hospital.id}>
                              <div className="flex items-center gap-2">
                                <Hospital className="h-4 w-4 text-blue-500" />
                                <div>
                                  <div className="font-medium">{hospital.name}</div>
                                  <div className="text-xs text-gray-500">{hospital.location}</div>
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Transport Method */}
                    <div className="space-y-4">
                      <Label>Transport Method *</Label>
                      <RadioGroup
                        value={transportRequest.transportMethod}
                        onValueChange={(value) => setTransportRequest({ ...transportRequest, transportMethod: value })}
                        className="space-y-4"
                      >
                        {transportMethods.map((method) => {
                          const IconComponent = method.icon
                          return (
                            <div key={method.id} className="flex items-start space-x-3">
                              <RadioGroupItem value={method.id} id={method.id} className="mt-1" />
                              <div className="flex-1">
                                <label htmlFor={method.id} className="cursor-pointer">
                                  <Card className="p-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-start gap-3">
                                      <IconComponent className={`h-6 w-6 text-${method.color}-600 mt-1`} />
                                      <div className="flex-1">
                                        <div className="font-medium">{method.name}</div>
                                        <div className="text-sm text-gray-600 mb-2">{method.description}</div>
                                        <div className="grid grid-cols-2 gap-4 text-xs">
                                          <div>
                                            <span className="font-medium">Max Distance:</span> {method.maxDistance} km
                                          </div>
                                          <div>
                                            <span className="font-medium">Avg Speed:</span> {method.avgSpeed} km/h
                                          </div>
                                          <div>
                                            <span className="font-medium">Availability:</span> {method.availability}
                                          </div>
                                        </div>
                                        {method.weatherDependent && (
                                          <div className="mt-2">
                                            <Badge variant="outline" className="text-xs">
                                              <AlertTriangle className="h-3 w-3 mr-1" />
                                              Weather Dependent
                                            </Badge>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </Card>
                                </label>
                              </div>
                            </div>
                          )
                        })}
                      </RadioGroup>
                    </div>

                    {/* Urgency Level */}
                    <div className="space-y-2">
                      <Label>Urgency Level</Label>
                      <Select
                        value={transportRequest.urgency}
                        onValueChange={(value) => setTransportRequest({ ...transportRequest, urgency: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="critical">Critical - Immediate</SelectItem>
                          <SelectItem value="urgent">Urgent - Within 2 hours</SelectItem>
                          <SelectItem value="standard">Standard - Within 6 hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Contact Person</Label>
                        <Input
                          placeholder="Dr. John Smith"
                          value={transportRequest.contactPerson}
                          onChange={(e) => setTransportRequest({ ...transportRequest, contactPerson: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Contact Phone</Label>
                        <Input
                          placeholder="+1-555-0123"
                          value={transportRequest.contactPhone}
                          onChange={(e) => setTransportRequest({ ...transportRequest, contactPhone: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Special Instructions */}
                    <div className="space-y-2">
                      <Label>Special Instructions</Label>
                      <Textarea
                        placeholder="Any special handling requirements or notes..."
                        value={transportRequest.specialInstructions}
                        onChange={(e) =>
                          setTransportRequest({ ...transportRequest, specialInstructions: e.target.value })
                        }
                        rows={3}
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button onClick={calculateEstimate} variant="outline" className="flex-1 bg-transparent">
                        <Timer className="mr-2 h-4 w-4" />
                        Calculate Estimate
                      </Button>
                      <Button
                        onClick={submitTransportRequest}
                        className="flex-1 bg-red-600 hover:bg-red-700"
                        disabled={
                          !transportRequest.organType ||
                          !transportRequest.pickupLocation ||
                          !transportRequest.dropLocation ||
                          !transportRequest.transportMethod
                        }
                      >
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Submit Request
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Estimate Details */}
                {estimatedDetails && (
                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-green-800">Transport Estimate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">Distance:</span>
                            <span>{estimatedDetails.distance} km</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Travel Time:</span>
                            <span>{estimatedDetails.travelTime} minutes</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Total Time:</span>
                            <span>{estimatedDetails.totalTime} minutes</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">Viability Remaining:</span>
                            <span
                              className={estimatedDetails.viabilityRemaining > 60 ? "text-green-600" : "text-red-600"}
                            >
                              {Math.round((estimatedDetails.viabilityRemaining / 60) * 10) / 10} hours
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Active Transports Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Active Transports
                    </CardTitle>
                    <CardDescription>Currently in progress</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {activeTransports.map((transport) => (
                      <Card key={transport.id} className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="bg-red-50 text-red-700">
                              {transport.organ}
                            </Badge>
                            <Badge variant={transport.status === "In Transit" ? "default" : "secondary"}>
                              {transport.status}
                            </Badge>
                          </div>

                          <div className="space-y-1 text-sm">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-3 w-3 text-gray-400" />
                              <span className="text-gray-600">From:</span>
                              <span className="font-medium">{transport.from}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-3 w-3 text-gray-400" />
                              <span className="text-gray-600">To:</span>
                              <span className="font-medium">{transport.to}</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{transport.progress.toFixed(1)}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-red-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${transport.progress}%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">ETA: {transport.eta}</span>
                            <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                              {transport.trackingId}
                            </span>
                          </div>

                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full bg-transparent"
                            onClick={() => setSelectedTransport(transport.id)}
                          >
                            <Eye className="mr-2 h-3 w-3" />
                            Track Live
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Transport Statistics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">24</div>
                        <div className="text-xs text-blue-600">Completed Today</div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">98%</div>
                        <div className="text-xs text-green-600">Success Rate</div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">12</div>
                        <div className="text-xs text-purple-600">Drones Active</div>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <div className="text-2xl font-bold text-red-600">3</div>
                        <div className="text-xs text-red-600">Critical Pending</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Live Tracking Tab */}
          <TabsContent value="tracking">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Transport Selection */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Navigation className="h-5 w-5" />
                      Select Transport to Track
                    </CardTitle>
                    <CardDescription>Choose an active transport for live tracking</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {activeTransports.map((transport) => (
                      <Card
                        key={transport.id}
                        className={`p-3 cursor-pointer transition-colors ${
                          selectedTransport === transport.id ? "bg-blue-50 border-blue-200" : "hover:bg-gray-50"
                        }`}
                        onClick={() => setSelectedTransport(transport.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">{transport.organ}</div>
                            <div className="text-xs text-gray-600">{transport.trackingId}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            {getTransportIcon(transport.method)}
                            <Badge
                              variant={transport.status === "In Transit" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {transport.status}
                            </Badge>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Live Tracking Map */}
              <div className="lg:col-span-2">
                {selectedTransport ? (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5" />
                          Live Tracking
                        </div>
                        <Button variant="outline" size="sm">
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Refresh
                        </Button>
                      </CardTitle>
                      <CardDescription>
                        Real-time tracking for {activeTransports.find((t) => t.id === selectedTransport)?.trackingId}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <TrackingMap transport={activeTransports.find((t) => t.id === selectedTransport)} />
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Transport to Track</h3>
                      <p className="text-gray-600">
                        Choose an active transport from the list to view live tracking information
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
