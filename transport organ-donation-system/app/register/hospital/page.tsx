"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Hospital } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function HospitalRegistrationPage() {
  const [formData, setFormData] = useState({
    hospitalName: "",
    registrationNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
    email: "",
    website: "",
    contactPersonName: "",
    contactPersonTitle: "",
    contactPersonPhone: "",
    contactPersonEmail: "",
    hospitalType: "",
    bedCapacity: "",
    specializations: "",
    emergencyContact: "",
    licenseNumber: "",
    accreditation: "",
    termsAccepted: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Hospital registration data:", formData)

    // Store registration data for thank you page
    localStorage.setItem(
      "hospitalRegistration",
      JSON.stringify({
        name: formData.hospitalName,
        email: formData.email,
        type: formData.hospitalType,
        registrationDate: new Date().toISOString(),
      }),
    )

    // Redirect to thank you page
    window.location.href = "/register/hospital/thank-you"
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container px-4 md:px-6 max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <Link href="/" className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-red-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">In-Need</span>
          </Link>
          <Hospital className="h-16 w-16 text-blue-600" />
          <h1 className="text-3xl font-bold tracking-tighter">Hospital Registration</h1>
          <p className="text-gray-500">Register your medical institution to access our organ donor database.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Hospital Information</CardTitle>
            <CardDescription>Please provide accurate information about your medical institution.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hospitalName">Hospital Name *</Label>
                    <Input
                      id="hospitalName"
                      value={formData.hospitalName}
                      onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber">Registration Number *</Label>
                    <Input
                      id="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact Person */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Primary Contact Person</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactPersonName">Contact Person Name *</Label>
                    <Input
                      id="contactPersonName"
                      value={formData.contactPersonName}
                      onChange={(e) => setFormData({ ...formData, contactPersonName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPersonTitle">Title/Position *</Label>
                    <Input
                      id="contactPersonTitle"
                      value={formData.contactPersonTitle}
                      onChange={(e) => setFormData({ ...formData, contactPersonTitle: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactPersonPhone">Contact Phone *</Label>
                    <Input
                      id="contactPersonPhone"
                      type="tel"
                      value={formData.contactPersonPhone}
                      onChange={(e) => setFormData({ ...formData, contactPersonPhone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPersonEmail">Contact Email *</Label>
                    <Input
                      id="contactPersonEmail"
                      type="email"
                      value={formData.contactPersonEmail}
                      onChange={(e) => setFormData({ ...formData, contactPersonEmail: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Hospital Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Hospital Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hospitalType">Hospital Type *</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, hospitalType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select hospital type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Hospital</SelectItem>
                        <SelectItem value="specialty">Specialty Hospital</SelectItem>
                        <SelectItem value="teaching">Teaching Hospital</SelectItem>
                        <SelectItem value="trauma">Trauma Center</SelectItem>
                        <SelectItem value="transplant">Transplant Center</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bedCapacity">Bed Capacity *</Label>
                    <Input
                      id="bedCapacity"
                      type="number"
                      value={formData.bedCapacity}
                      onChange={(e) => setFormData({ ...formData, bedCapacity: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specializations">Medical Specializations</Label>
                  <Textarea
                    id="specializations"
                    placeholder="List your hospital's medical specializations..."
                    value={formData.specializations}
                    onChange={(e) => setFormData({ ...formData, specializations: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="licenseNumber">Medical License Number *</Label>
                    <Input
                      id="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">24/7 Emergency Contact *</Label>
                    <Input
                      id="emergencyContact"
                      type="tel"
                      value={formData.emergencyContact}
                      onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) => setFormData({ ...formData, termsAccepted: checked as boolean })}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Link href="/terms" className="text-blue-600 hover:underline">
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="/register" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    Back
                  </Button>
                </Link>
                <Button type="submit" className="flex-1" disabled={!formData.termsAccepted}>
                  Register Hospital
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
