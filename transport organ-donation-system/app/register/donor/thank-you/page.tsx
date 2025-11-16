"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Heart, CheckCircle, Clock, Mail, Phone, FileText, Users, Award } from "lucide-react"
import Link from "next/link"

interface DonorRegistration {
  name: string
  email: string
  hospital: string
  organs: string[]
  registrationDate: string
}

export default function DonorThankYouPage() {
  const [registration, setRegistration] = useState<DonorRegistration | null>(null)

  useEffect(() => {
    const storedData = localStorage.getItem("donorRegistration")
    if (storedData) {
      setRegistration(JSON.parse(storedData))
    }
  }, [])

  const handlePrint = () => {
    window.print()
  }

  if (!registration) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="text-center py-12">
            <Heart className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Registration Not Found</h3>
            <p className="text-gray-500 mb-4">We couldn't find your registration details.</p>
            <Link href="/register/donor">
              <Button>Register as Donor</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const hospitalNames: { [key: string]: string } = {
    "aiims-delhi": "All India Institute of Medical Sciences - New Delhi",
    "apollo-chennai": "Apollo Hospitals - Chennai",
    "fortis-gurugram": "Fortis Healthcare - Gurugram",
    "manipal-bangalore": "Manipal Hospital - Bangalore",
    "medanta-gurugram": "Medanta - The Medicity - Gurugram",
    "kokilaben-mumbai": "Kokilaben Dhirubhai Ambani Hospital - Mumbai",
    "metro-general-ny": "Metropolitan General Hospital - New York",
    "st-marys-la": "St. Mary's Transplant Center - Los Angeles",
    "johns-hopkins": "Johns Hopkins Hospital - Baltimore",
    "cleveland-clinic": "Cleveland Clinic - Cleveland",
    "texas-heart": "Texas Heart Institute - Houston",
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <Link href="/" className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-red-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">In-Need</span>
          </Link>
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-green-800">You Are a Hero! 🎉</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Thank you for registering as an organ donor. Your generous decision can save up to 8 lives and enhance the
            lives of 75 others.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Registration Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Registration Summary
              </CardTitle>
              <CardDescription>Your donor registration has been successfully submitted.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-500">Full Name</Label>
                  <p className="font-medium">{registration.name}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Email</Label>
                  <p className="font-medium">{registration.email}</p>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500">Affiliated Hospital</Label>
                <p className="font-medium">{hospitalNames[registration.hospital] || registration.hospital}</p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500">Organs to Donate</Label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {registration.organs.map((organ) => (
                    <Badge key={organ} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                      {organ}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500">Registration Date</Label>
                <p className="font-medium">{new Date(registration.registrationDate).toLocaleDateString()}</p>
              </div>

              <Separator />

              <div className="flex gap-2">
                <Button onClick={handlePrint} variant="outline" className="flex-1 bg-transparent">
                  <FileText className="h-4 w-4 mr-2" />
                  Print Confirmation
                </Button>
                <Link href="/search" className="flex-1">
                  <Button className="w-full bg-red-600 hover:bg-red-700">View Donor Database</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                What Happens Next?
              </CardTitle>
              <CardDescription>Here's what you can expect in the coming days.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-1 mt-1">
                    <span className="text-xs font-bold px-2">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Email Confirmation</h4>
                    <p className="text-sm text-gray-600">You'll receive a confirmation email within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-1 mt-1">
                    <span className="text-xs font-bold px-2">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Hospital Contact</h4>
                    <p className="text-sm text-gray-600">
                      Your affiliated hospital will contact you within 2-3 business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-1 mt-1">
                    <span className="text-xs font-bold px-2">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Medical Evaluation</h4>
                    <p className="text-sm text-gray-600">
                      Schedule and complete your medical compatibility assessment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 text-green-600 rounded-full p-1 mt-1">
                    <span className="text-xs font-bold px-2">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Registration Approval</h4>
                    <p className="text-sm text-gray-600">
                      Once approved, you'll be added to the active donor database.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Your Potential Impact
              </CardTitle>
              <CardDescription>The lives you can save and enhance through organ donation.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">8</div>
                  <p className="text-sm text-gray-600">Lives Saved</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">75</div>
                  <p className="text-sm text-gray-600">Lives Enhanced</p>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="space-y-2 text-sm text-gray-600">
                <p>• One heart can save a life</p>
                <p>• One liver can save a life</p>
                <p>• Two kidneys can save two lives</p>
                <p>• Two lungs can save two lives</p>
                <p>• Tissues can enhance up to 75 lives</p>
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Important Information
              </CardTitle>
              <CardDescription>Key details about your donor registration.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Medical Evaluation Required</h4>
                <p className="text-sm text-blue-800">
                  All donors must complete a medical evaluation to ensure organ compatibility and safety.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">24/7 Support Available</h4>
                <p className="text-sm text-green-800">
                  Our support team is available around the clock for any questions or concerns.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-900 mb-2">Keep Information Updated</h4>
                <p className="text-sm text-yellow-800">
                  Please notify us of any changes to your contact information or medical status.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Need Help or Have Questions?</CardTitle>
            <CardDescription>Our support team is here to assist you throughout the process.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-sm text-gray-600">support@inneed.org</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">24/7 Helpline</p>
                  <p className="text-sm text-gray-600">1-800-INNEED</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Hospital Coordinator</p>
                  <p className="text-sm text-gray-600">Will contact you soon</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <Link href="/">
            <Button variant="outline">Return to Home</Button>
          </Link>
          <Link href="/login">
            <Button className="bg-red-600 hover:bg-red-700">Login to Your Account</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function Label({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>
}
