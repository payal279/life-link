"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart, Clock, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function DonorRegistrationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    bloodType: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
    email: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelation: "",
    medicalHistory: "",
    currentMedications: "",
    allergies: "",
    organsToDonate: [] as string[],
    criticalOrgans: [] as string[],
    tissuesDonate: false,
    eyesDonate: false,
    termsAccepted: false,
    medicalConsent: false,
    hospital: "",
    donorType: "living", // "living" or "deceased"
    organViabilityHours: {} as { [key: string]: number },
  })

  const regularOrgans = ["Kidneys", "Liver", "Pancreas", "Small Intestine", "Corneas"]
  const criticalOrgans = ["Heart", "Lungs"]

  const organViabilityLimits = {
    Heart: { min: 4, max: 6, default: 4 },
    Lungs: { min: 4, max: 8, default: 6 },
    Liver: { min: 8, max: 12, default: 10 },
    Kidneys: { min: 24, max: 48, default: 36 },
    Pancreas: { min: 12, max: 24, default: 18 },
    "Small Intestine": { min: 6, max: 12, default: 8 },
    Corneas: { min: 72, max: 168, default: 120 },
  }

  const handleOrganChange = (organ: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        organsToDonate: [...formData.organsToDonate, organ],
        organViabilityHours: {
          ...formData.organViabilityHours,
          [organ]: organViabilityLimits[organ as keyof typeof organViabilityLimits]?.default || 24,
        },
      })
    } else {
      const newOrgans = formData.organsToDonate.filter((o) => o !== organ)
      const newViability = { ...formData.organViabilityHours }
      delete newViability[organ]
      setFormData({
        ...formData,
        organsToDonate: newOrgans,
        organViabilityHours: newViability,
      })
    }
  }

  const handleCriticalOrganChange = (organ: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        criticalOrgans: [...formData.criticalOrgans, organ],
        organViabilityHours: {
          ...formData.organViabilityHours,
          [organ]: organViabilityLimits[organ as keyof typeof organViabilityLimits]?.default || 4,
        },
      })
    } else {
      const newCriticalOrgans = formData.criticalOrgans.filter((o) => o !== organ)
      const newViability = { ...formData.organViabilityHours }
      delete newViability[organ]
      setFormData({
        ...formData,
        criticalOrgans: newCriticalOrgans,
        organViabilityHours: newViability,
      })
    }
  }

  const handleViabilityChange = (organ: string, hours: number) => {
    setFormData({
      ...formData,
      organViabilityHours: {
        ...formData.organViabilityHours,
        [organ]: hours,
      },
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Donor registration data:", formData)

    // Store registration data in localStorage for the thank you page
    localStorage.setItem(
      "donorRegistration",
      JSON.stringify({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        hospital: formData.hospital,
        organs: [...formData.organsToDonate, ...formData.criticalOrgans],
        donorType: formData.donorType,
        organViability: formData.organViabilityHours,
        registrationDate: new Date().toISOString(),
      }),
    )

    // Redirect to thank you page
    window.location.href = "/register/donor/thank-you"
  }

  const allSelectedOrgans = [...formData.organsToDonate, ...formData.criticalOrgans]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container px-4 md:px-6 max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <Link href="/" className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-red-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">In-Need</span>
          </Link>
          <Heart className="h-16 w-16 text-red-600" />
          <h1 className="text-3xl font-bold tracking-tighter">Organ Donor Registration</h1>
          <p className="text-gray-500">Register as an organ donor and help save lives.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Donor Information</CardTitle>
            <CardDescription>Please provide your personal and medical information accurately.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Donor Type Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Donor Type</h3>
                <RadioGroup
                  value={formData.donorType}
                  onValueChange={(value) => setFormData({ ...formData, donorType: value })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="living" id="living" />
                    <Label htmlFor="living" className="text-sm">
                      Living Donor (Kidneys, Liver segments, etc.)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="deceased" id="deceased" />
                    <Label htmlFor="deceased" className="text-sm">
                      Deceased Donor (All organs including heart, lungs)
                    </Label>
                  </div>
                </RadioGroup>

                {formData.donorType === "deceased" && (
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <h4 className="font-medium text-red-800">Deceased Donor Registration</h4>
                    </div>
                    <p className="text-sm text-red-700">
                      This registration is for deceased donors. Critical organs like heart and lungs have very limited
                      viability windows and require immediate coordination.
                    </p>
                  </div>
                )}
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender *</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bloodType">Blood Type *</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, bloodType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select blood type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                      </SelectContent>
                    </Select>
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

              {/* Hospital Affiliation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Hospital Affiliation</h3>
                <p className="text-sm text-gray-600">
                  All organ donors must be registered through a verified hospital for medical evaluation and
                  coordination.
                </p>
                <div className="space-y-2">
                  <Label htmlFor="hospital">Select Hospital *</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, hospital: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your affiliated hospital" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aiims-delhi">All India Institute of Medical Sciences - New Delhi</SelectItem>
                      <SelectItem value="apollo-chennai">Apollo Hospitals - Chennai</SelectItem>
                      <SelectItem value="fortis-gurugram">Fortis Healthcare - Gurugram</SelectItem>
                      <SelectItem value="manipal-bangalore">Manipal Hospital - Bangalore</SelectItem>
                      <SelectItem value="medanta-gurugram">Medanta - The Medicity - Gurugram</SelectItem>
                      <SelectItem value="kokilaben-mumbai">Kokilaben Dhirubhai Ambani Hospital - Mumbai</SelectItem>
                      <SelectItem value="metro-general-ny">Metropolitan General Hospital - New York</SelectItem>
                      <SelectItem value="st-marys-la">St. Mary's Transplant Center - Los Angeles</SelectItem>
                      <SelectItem value="johns-hopkins">Johns Hopkins Hospital - Baltimore</SelectItem>
                      <SelectItem value="cleveland-clinic">Cleveland Clinic - Cleveland</SelectItem>
                      <SelectItem value="texas-heart">Texas Heart Institute - Houston</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Emergency Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactName">Contact Name *</Label>
                    <Input
                      id="emergencyContactName"
                      value={formData.emergencyContactName}
                      onChange={(e) => setFormData({ ...formData, emergencyContactName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContactPhone">Contact Phone *</Label>
                    <Input
                      id="emergencyContactPhone"
                      type="tel"
                      value={formData.emergencyContactPhone}
                      onChange={(e) => setFormData({ ...formData, emergencyContactPhone: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyContactRelation">Relationship *</Label>
                  <Input
                    id="emergencyContactRelation"
                    placeholder="e.g., Spouse, Parent, Sibling"
                    value={formData.emergencyContactRelation}
                    onChange={(e) => setFormData({ ...formData, emergencyContactRelation: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Medical Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Medical Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="medicalHistory">Medical History</Label>
                  <Textarea
                    id="medicalHistory"
                    placeholder="Please list any significant medical conditions, surgeries, or chronic illnesses..."
                    value={formData.medicalHistory}
                    onChange={(e) => setFormData({ ...formData, medicalHistory: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currentMedications">Current Medications</Label>
                  <Textarea
                    id="currentMedications"
                    placeholder="List all current medications and dosages..."
                    value={formData.currentMedications}
                    onChange={(e) => setFormData({ ...formData, currentMedications: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="allergies">Allergies</Label>
                  <Textarea
                    id="allergies"
                    placeholder="List any known allergies to medications, foods, or other substances..."
                    value={formData.allergies}
                    onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                  />
                </div>
              </div>

              {/* Critical Organs Section - Only for deceased donors */}
              {formData.donorType === "deceased" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <h3 className="text-lg font-semibold text-red-800">Critical Organs (Time-Sensitive)</h3>
                  </div>
                  <p className="text-sm text-red-600">
                    These organs have very limited viability windows and require immediate transplantation.
                  </p>

                  <div className="space-y-4">
                    {criticalOrgans.map((organ) => (
                      <div key={organ} className="border border-red-200 rounded-lg p-4 bg-red-50">
                        <div className="flex items-center space-x-2 mb-3">
                          <Checkbox
                            id={`critical-${organ}`}
                            checked={formData.criticalOrgans.includes(organ)}
                            onCheckedChange={(checked) => handleCriticalOrganChange(organ, checked as boolean)}
                          />
                          <Label htmlFor={`critical-${organ}`} className="text-sm font-medium text-red-800">
                            {organ}
                          </Label>
                        </div>

                        {formData.criticalOrgans.includes(organ) && (
                          <div className="ml-6 space-y-2">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-red-600" />
                              <Label className="text-sm text-red-700">Viability Window (Hours)</Label>
                            </div>
                            <div className="flex items-center gap-4">
                              <Input
                                type="number"
                                min={organViabilityLimits[organ as keyof typeof organViabilityLimits]?.min}
                                max={organViabilityLimits[organ as keyof typeof organViabilityLimits]?.max}
                                value={
                                  formData.organViabilityHours[organ] ||
                                  organViabilityLimits[organ as keyof typeof organViabilityLimits]?.default
                                }
                                onChange={(e) => handleViabilityChange(organ, Number.parseInt(e.target.value))}
                                className="w-20"
                              />
                              <span className="text-xs text-red-600">
                                Range: {organViabilityLimits[organ as keyof typeof organViabilityLimits]?.min}-
                                {organViabilityLimits[organ as keyof typeof organViabilityLimits]?.max} hours
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Regular Organs Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  {formData.donorType === "living" ? "Available Organs" : "Standard Organs"}
                </h3>
                <div className="space-y-4">
                  {regularOrgans.map((organ) => (
                    <div key={organ} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="flex items-center space-x-2 mb-3">
                        <Checkbox
                          id={organ}
                          checked={formData.organsToDonate.includes(organ)}
                          onCheckedChange={(checked) => handleOrganChange(organ, checked as boolean)}
                        />
                        <Label htmlFor={organ} className="text-sm font-medium">
                          {organ}
                        </Label>
                      </div>

                      {formData.organsToDonate.includes(organ) && formData.donorType === "deceased" && (
                        <div className="ml-6 space-y-2">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-blue-600" />
                            <Label className="text-sm text-blue-700">Viability Window (Hours)</Label>
                          </div>
                          <div className="flex items-center gap-4">
                            <Input
                              type="number"
                              min={organViabilityLimits[organ as keyof typeof organViabilityLimits]?.min}
                              max={organViabilityLimits[organ as keyof typeof organViabilityLimits]?.max}
                              value={
                                formData.organViabilityHours[organ] ||
                                organViabilityLimits[organ as keyof typeof organViabilityLimits]?.default
                              }
                              onChange={(e) => handleViabilityChange(organ, Number.parseInt(e.target.value))}
                              className="w-20"
                            />
                            <span className="text-xs text-blue-600">
                              Range: {organViabilityLimits[organ as keyof typeof organViabilityLimits]?.min}-
                              {organViabilityLimits[organ as keyof typeof organViabilityLimits]?.max} hours
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Additional Options */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="tissues"
                      checked={formData.tissuesDonate}
                      onCheckedChange={(checked) => setFormData({ ...formData, tissuesDonate: checked as boolean })}
                    />
                    <Label htmlFor="tissues" className="text-sm">
                      Donate tissues (skin, bone, tendons) - Up to 7 days viability
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="eyes"
                      checked={formData.eyesDonate}
                      onCheckedChange={(checked) => setFormData({ ...formData, eyesDonate: checked as boolean })}
                    />
                    <Label htmlFor="eyes" className="text-sm">
                      Donate eyes for research - Up to 7 days viability
                    </Label>
                  </div>
                </div>
              </div>

              {/* Consent */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="medicalConsent"
                    checked={formData.medicalConsent}
                    onCheckedChange={(checked) => setFormData({ ...formData, medicalConsent: checked as boolean })}
                  />
                  <Label htmlFor="medicalConsent" className="text-sm">
                    I consent to medical evaluation and testing for organ donation suitability
                  </Label>
                </div>
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
                  className="flex-1 bg-red-600 hover:bg-red-700"
                  disabled={!formData.termsAccepted || !formData.medicalConsent || allSelectedOrgans.length === 0}
                >
                  Register as Donor
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
