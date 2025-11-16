"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function OrganizationRegistrationPage() {
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationType: "",
    registrationNumber: "",
    taxId: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
    email: "",
    website: "",
    directorName: "",
    directorEmail: "",
    directorPhone: "",
    contactPersonName: "",
    contactPersonTitle: "",
    contactPersonPhone: "",
    contactPersonEmail: "",
    servicesProvided: "",
    yearsInOperation: "",
    licenseNumber: "",
    accreditation: "",
    missionStatement: "",
    termsAccepted: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Organization registration data:", formData)
    alert("Organization registration submitted successfully! You will receive a confirmation email shortly.")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container px-4 md:px-6 max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <Link href="/" className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-red-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">In-Need</span>
          </Link>
          <Users className="h-16 w-16 text-green-600" />
          <h1 className="text-3xl font-bold tracking-tighter">Organization Registration</h1>
          <p className="text-gray-500">Register your organ donation organization to coordinate and manage donations.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Organization Information</CardTitle>
            <CardDescription>Please provide accurate information about your organization.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="organizationName">Organization Name *</Label>
                    <Input
                      id="organizationName"
                      value={formData.organizationName}
                      onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organizationType">Organization Type *</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, organizationType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nonprofit">Non-Profit Organization</SelectItem>
                        <SelectItem value="government">Government Agency</SelectItem>
                        <SelectItem value="hospital-network">Hospital Network</SelectItem>
                        <SelectItem value="transplant-center">Transplant Center</SelectItem>
                        <SelectItem value="organ-bank">Organ Procurement Organization</SelectItem>
                        <SelectItem value="research">Research Institution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber">Registration Number *</Label>
                    <Input
                      id="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="taxId">Tax ID / EIN</Label>
                    <Input
                      id="taxId"
                      value={formData.taxId}
                      onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
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

                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://www.example.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>
              </div>

              {/* Leadership Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Leadership Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="directorName">Director/CEO Name *</Label>
                    <Input
                      id="directorName"
                      value={formData.directorName}
                      onChange={(e) => setFormData({ ...formData, directorName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="directorEmail">Director Email *</Label>
                    <Input
                      id="directorEmail"
                      type="email"
                      value={formData.directorEmail}
                      onChange={(e) => setFormData({ ...formData, directorEmail: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="directorPhone">Director Phone *</Label>
                  <Input
                    id="directorPhone"
                    type="tel"
                    value={formData.directorPhone}
                    onChange={(e) => setFormData({ ...formData, directorPhone: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Primary Contact */}
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

              {/* Organization Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Organization Details</h3>
                <div className="space-y-2">
                  <Label htmlFor="missionStatement">Mission Statement *</Label>
                  <Textarea
                    id="missionStatement"
                    placeholder="Describe your organization's mission and goals..."
                    value={formData.missionStatement}
                    onChange={(e) => setFormData({ ...formData, missionStatement: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="servicesProvided">Services Provided *</Label>
                  <Textarea
                    id="servicesProvided"
                    placeholder="Describe the organ donation services your organization provides..."
                    value={formData.servicesProvided}
                    onChange={(e) => setFormData({ ...formData, servicesProvided: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="yearsInOperation">Years in Operation *</Label>
                    <Input
                      id="yearsInOperation"
                      type="number"
                      min="0"
                      value={formData.yearsInOperation}
                      onChange={(e) => setFormData({ ...formData, yearsInOperation: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="licenseNumber">License Number</Label>
                    <Input
                      id="licenseNumber"
                      value={formData.licenseNumber}
                      onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accreditation">Accreditation/Certifications</Label>
                  <Textarea
                    id="accreditation"
                    placeholder="List any relevant accreditations or certifications..."
                    value={formData.accreditation}
                    onChange={(e) => setFormData({ ...formData, accreditation: e.target.value })}
                  />
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
                <Button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  disabled={!formData.termsAccepted}
                >
                  Register Organization
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
