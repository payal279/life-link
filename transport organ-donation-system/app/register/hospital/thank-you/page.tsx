"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, CheckCircle, Mail, Phone, Hospital, Shield, FileText, Clock } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface HospitalRegistrationData {
  name: string
  email: string
  type: string
  registrationDate: string
}

export default function HospitalThankYouPage() {
  const [registrationData, setRegistrationData] = useState<HospitalRegistrationData | null>(null)

  useEffect(() => {
    const data = localStorage.getItem("hospitalRegistration")
    if (data) {
      setRegistrationData(JSON.parse(data))
      localStorage.removeItem("hospitalRegistration")
    }
  }, [])

  const getHospitalTypeLabel = (type: string) => {
    const types: { [key: string]: string } = {
      general: "General Hospital",
      specialty: "Specialty Hospital",
      teaching: "Teaching Hospital",
      trauma: "Trauma Center",
      transplant: "Transplant Center",
    }
    return types[type] || type
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <Link href="/" className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-red-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">In-Need</span>
          </Link>
          <div className="bg-blue-100 p-4 rounded-full">
            <CheckCircle className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-blue-800">Hospital Registration Submitted!</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Thank you for joining the In-Need network. Your hospital registration is under review and will be processed
            within 2-3 business days.
          </p>
        </div>

        {/* Registration Summary */}
        {registrationData && (
          <Card className="mb-8 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Hospital className="h-5 w-5" />
                Registration Summary
              </CardTitle>
              <CardDescription>Here are the details of your hospital registration</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Hospital Name</Label>
                    <p className="text-lg font-semibold">{registrationData.name}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Hospital Type</Label>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {getHospitalTypeLabel(registrationData.type)}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Contact Email</Label>
                    <p className="text-lg">{registrationData.email}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-500">Registration Date</Label>
                    <p className="text-lg">{new Date(registrationData.registrationDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Verification Process */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              Verification Process
            </CardTitle>
            <CardDescription>
              Your hospital registration will go through our comprehensive verification process
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-1 mt-1">
                <span className="text-blue-600 text-sm font-bold w-6 h-6 flex items-center justify-center">1</span>
              </div>
              <div>
                <h4 className="font-semibold">Document Review</h4>
                <p className="text-sm text-gray-600">
                  Our team will verify your hospital's credentials, licenses, and accreditations.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-1 mt-1">
                <span className="text-blue-600 text-sm font-bold w-6 h-6 flex items-center justify-center">2</span>
              </div>
              <div>
                <h4 className="font-semibold">Background Check</h4>
                <p className="text-sm text-gray-600">
                  Verification of hospital registration, medical board certifications, and compliance records.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-1 mt-1">
                <span className="text-blue-600 text-sm font-bold w-6 h-6 flex items-center justify-center">3</span>
              </div>
              <div>
                <h4 className="font-semibold">System Setup</h4>
                <p className="text-sm text-gray-600">
                  Creation of hospital account, access credentials, and system training materials.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-1 mt-1">
                <span className="text-blue-600 text-sm font-bold w-6 h-6 flex items-center justify-center">4</span>
              </div>
              <div>
                <h4 className="font-semibold">Account Activation</h4>
                <p className="text-sm text-gray-600">
                  Full access to the In-Need platform and donor database upon approval.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What's Next */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-600" />
                What to Expect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Within 24 Hours</h4>
                <p className="text-sm text-purple-700">
                  You'll receive an email confirmation with your application reference number and next steps.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Within 2-3 Business Days</h4>
                <p className="text-sm text-blue-700">
                  Our verification team will complete the review process and notify you of the approval status.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Upon Approval</h4>
                <p className="text-sm text-green-700">
                  You'll receive login credentials and access to the complete In-Need platform and training materials.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-orange-600" />
                Required Documentation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">Hospital Registration Certificate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">Medical License Documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">Accreditation Certificates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">Contact Person Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">Emergency Contact Validation</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-red-600" />
              Need Assistance?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold">Email Support</h4>
                <p className="text-sm text-gray-600">hospitals@inneed.org</p>
                <p className="text-xs text-gray-500">Response within 4 hours</p>
              </div>
              <div className="text-center">
                <Phone className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold">Hospital Helpline</h4>
                <p className="text-sm text-gray-600">1-800-INNEED</p>
                <p className="text-xs text-gray-500">Mon-Fri, 8 AM - 6 PM</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold">Verification Team</h4>
                <p className="text-sm text-gray-600">verify@inneed.org</p>
                <p className="text-xs text-gray-500">For verification queries</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Heart className="mr-2 h-4 w-4" />
              Return to Home
            </Button>
          </Link>
          <Button variant="outline" size="lg" onClick={() => window.print()}>
            <FileText className="mr-2 h-4 w-4" />
            Print Confirmation
          </Button>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-12 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome to the In-Need Network!</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            By joining In-Need, your hospital becomes part of a life-saving network that connects donors with
            recipients. Together, we can save more lives and give hope to families in need.
          </p>
        </div>
      </div>
    </div>
  )
}

function Label({ className, children }: { className?: string; children: React.ReactNode }) {
  return <label className={className}>{children}</label>
}
