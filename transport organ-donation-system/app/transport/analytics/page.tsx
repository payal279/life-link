"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Heart,
  TrendingUp,
  TrendingDown,
  Zap,
  Truck,
  Plane,
  MapPin,
  Clock,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Download,
  Activity,
  Users,
  Navigation,
} from "lucide-react"
import Link from "next/link"

export default function TransportAnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d")
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm">
        <Link href="/" className="flex items-center justify-center">
          <Heart className="h-8 w-8 text-red-500" />
          <span className="ml-2 text-xl font-bold text-gray-900">In-Need</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href="/search" className="text-sm font-medium hover:underline underline-offset-4">
            Search Donors
          </Link>
          <Link href="/transport" className="text-sm font-medium hover:underline underline-offset-4">
            Transport Hub
          </Link>
          <Link href="/register" className="text-sm font-medium hover:underline underline-offset-4">
            Register
          </Link>
        </nav>
      </header>

      <div className="container px-4 md:px-6 py-8 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Transport Analytics</h1>
            <p className="text-gray-600">Comprehensive performance insights for organ transportation network</p>
          </div>
          <div className="flex items-center gap-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">7 Days</SelectItem>
                <SelectItem value="30d">30 Days</SelectItem>
                <SelectItem value="90d">90 Days</SelectItem>
                <SelectItem value="1y">1 Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={handleRefresh} disabled={isRefreshing}>
              <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Transports</p>
                  <p className="text-2xl font-bold text-gray-900">1,247</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-sm text-green-600">+12% from last month</span>
                  </div>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Navigation className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Success Rate</p>
                  <p className="text-2xl font-bold text-gray-900">98.2%</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-sm text-green-600">+0.3% improvement</span>
                  </div>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Delivery Time</p>
                  <p className="text-2xl font-bold text-gray-900">142 min</p>
                  <div className="flex items-center mt-1">
                    <TrendingDown className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-sm text-green-600">8 min faster</span>
                  </div>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Cost Efficiency</p>
                  <p className="text-2xl font-bold text-gray-900">87.5%</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-sm text-green-600">+2.1% improvement</span>
                  </div>
                </div>
                <div className="bg-yellow-100 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="methods">Methods</TabsTrigger>
            <TabsTrigger value="organs">Organs</TabsTrigger>
            <TabsTrigger value="routes">Routes</TabsTrigger>
            <TabsTrigger value="realtime">Real-time</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Trends</CardTitle>
                  <CardDescription>Monthly transport volume and success rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">January</span>
                      <div className="flex items-center gap-2">
                        <Progress value={85} className="w-24" />
                        <span className="text-sm text-gray-600">342 transports</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">February</span>
                      <div className="flex items-center gap-2">
                        <Progress value={92} className="w-24" />
                        <span className="text-sm text-gray-600">398 transports</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">March</span>
                      <div className="flex items-center gap-2">
                        <Progress value={78} className="w-24" />
                        <span className="text-sm text-gray-600">289 transports</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">April</span>
                      <div className="flex items-center gap-2">
                        <Progress value={96} className="w-24" />
                        <span className="text-sm text-gray-600">456 transports</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>Transport volume by region</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium">Northeast</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={85} className="w-20" />
                        <span className="text-sm text-gray-600">425</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">Southeast</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={72} className="w-20" />
                        <span className="text-sm text-gray-600">356</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-medium">Midwest</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={68} className="w-20" />
                        <span className="text-sm text-gray-600">289</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-orange-600" />
                        <span className="text-sm font-medium">West</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={58} className="w-20" />
                        <span className="text-sm text-gray-600">177</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">94.8%</div>
                  <p className="text-sm text-gray-600">On-time Delivery</p>
                  <Badge variant="outline" className="mt-2 bg-blue-50 text-blue-700">
                    +2.3% vs last month
                  </Badge>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">89</div>
                  <p className="text-sm text-gray-600">Critical Deliveries</p>
                  <Badge variant="outline" className="mt-2 bg-red-50 text-red-700">
                    This month
                  </Badge>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">45,234</div>
                  <p className="text-sm text-gray-600">Total Distance (km)</p>
                  <Badge variant="outline" className="mt-2 bg-green-50 text-green-700">
                    All transports
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Methods Tab */}
          <TabsContent value="methods" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <Zap className="h-5 w-5" />
                    Drone Delivery
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">456</div>
                      <div className="text-xs text-purple-700">Total Transports</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">99.1%</div>
                      <div className="text-xs text-purple-700">Success Rate</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Avg Time</span>
                      <span className="font-medium">35 min</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Avg Cost</span>
                      <span className="font-medium">$245</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Max Range</span>
                      <span className="font-medium">50 km</span>
                    </div>
                  </div>
                  <Progress value={99.1} className="h-2" />
                  <Badge className="w-full justify-center bg-purple-600">Most Efficient</Badge>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <Truck className="h-5 w-5" />
                    Emergency Ambulance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">523</div>
                      <div className="text-xs text-red-700">Total Transports</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">97.8%</div>
                      <div className="text-xs text-red-700">Success Rate</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Avg Time</span>
                      <span className="font-medium">89 min</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Avg Cost</span>
                      <span className="font-medium">$1,250</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Max Range</span>
                      <span className="font-medium">500 km</span>
                    </div>
                  </div>
                  <Progress value={97.8} className="h-2" />
                  <Badge variant="outline" className="w-full justify-center bg-red-50 text-red-700">
                    Most Reliable
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <Plane className="h-5 w-5" />
                    Air Transport
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">268</div>
                      <div className="text-xs text-blue-700">Total Transports</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">97.4%</div>
                      <div className="text-xs text-blue-700">Success Rate</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Avg Time</span>
                      <span className="font-medium">78 min</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Avg Cost</span>
                      <span className="font-medium">$12,500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Max Range</span>
                      <span className="font-medium">2000 km</span>
                    </div>
                  </div>
                  <Progress value={97.4} className="h-2" />
                  <Badge variant="outline" className="w-full justify-center bg-blue-50 text-blue-700">
                    Longest Range
                  </Badge>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Method Efficiency Trends</CardTitle>
                <CardDescription>Performance comparison over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Drone Delivery Efficiency</span>
                    <div className="flex items-center gap-2">
                      <Progress value={95} className="w-32" />
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-green-600">+3.2%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Emergency Vehicle Efficiency</span>
                    <div className="flex items-center gap-2">
                      <Progress value={87} className="w-32" />
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-green-600">+1.8%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Air Transport Efficiency</span>
                    <div className="flex items-center gap-2">
                      <Progress value={82} className="w-32" />
                      <TrendingDown className="h-4 w-4 text-red-600" />
                      <span className="text-sm text-red-600">-0.5%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Organs Tab */}
          <TabsContent value="organs" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Organ Transport Volume</CardTitle>
                  <CardDescription>Distribution by organ type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-red-600" />
                        <span className="text-sm font-medium">Heart</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={85} className="w-24" />
                        <span className="text-sm text-gray-600">234 (18.8%)</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Activity className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium">Kidney</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={92} className="w-24" />
                        <span className="text-sm text-gray-600">456 (36.6%)</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">Liver</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={78} className="w-24" />
                        <span className="text-sm text-gray-600">289 (23.2%)</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Navigation className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-medium">Lungs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={65} className="w-24" />
                        <span className="text-sm text-gray-600">156 (12.5%)</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-orange-600" />
                        <span className="text-sm font-medium">Other</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={45} className="w-24" />
                        <span className="text-sm text-gray-600">112 (9.0%)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Success Rate by Organ</CardTitle>
                  <CardDescription>Transport success rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Heart</span>
                      <div className="flex items-center gap-2">
                        <Progress value={99.1} className="w-20" />
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          99.1%
                        </Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Kidney</span>
                      <div className="flex items-center gap-2">
                        <Progress value={98.7} className="w-20" />
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          98.7%
                        </Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Liver</span>
                      <div className="flex items-center gap-2">
                        <Progress value={97.9} className="w-20" />
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          97.9%
                        </Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Lungs</span>
                      <div className="flex items-center gap-2">
                        <Progress value={96.8} className="w-20" />
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
                          96.8%
                        </Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Other</span>
                      <div className="flex items-center gap-2">
                        <Progress value={98.2} className="w-20" />
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          98.2%
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Organ Viability Utilization</CardTitle>
                <CardDescription>Percentage of organ viability time used during transport</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-red-600">42%</div>
                    <div className="text-sm text-red-700">Heart</div>
                    <div className="text-xs text-gray-600">4-6 hrs viability</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Activity className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">18%</div>
                    <div className="text-sm text-blue-700">Kidney</div>
                    <div className="text-xs text-gray-600">24-48 hrs viability</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">28%</div>
                    <div className="text-sm text-green-700">Liver</div>
                    <div className="text-xs text-gray-600">12-18 hrs viability</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Navigation className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">45%</div>
                    <div className="text-sm text-purple-700">Lungs</div>
                    <div className="text-xs text-gray-600">4-6 hrs viability</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Routes Tab */}
          <TabsContent value="routes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Popular Routes</CardTitle>
                <CardDescription>Most frequently used transport routes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">New York → Los Angeles</div>
                        <div className="text-sm text-gray-600">2,445 miles • Preferred: Air Transport</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">89 transports</div>
                      <div className="text-sm text-gray-600">97.8% success</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-green-600" />
                      <div>
                        <div className="font-medium">Chicago → Houston</div>
                        <div className="text-sm text-gray-600">925 miles • Preferred: Emergency Vehicle</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">76 transports</div>
                      <div className="text-sm text-gray-600">98.7% success</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-medium">Boston → Philadelphia</div>
                        <div className="text-sm text-gray-600">271 miles • Preferred: Drone</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-purple-600">134 transports</div>
                      <div className="text-sm text-gray-600">99.3% success</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-orange-600" />
                      <div>
                        <div className="font-medium">Miami → Atlanta</div>
                        <div className="text-sm text-gray-600">604 miles • Preferred: Air Transport</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-orange-600">67 transports</div>
                      <div className="text-sm text-gray-600">96.9% success</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-red-600" />
                      <div>
                        <div className="font-medium">Mumbai → Delhi</div>
                        <div className="text-sm text-gray-600">875 miles • Preferred: Drone</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-red-600">156 transports</div>
                      <div className="text-sm text-gray-600">99.4% success</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Route Efficiency</CardTitle>
                  <CardDescription>Distance vs time performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Short Range (&lt;100 miles)</span>
                      <div className="flex items-center gap-2">
                        <Progress value={95} className="w-20" />
                        <Badge className="bg-green-600">Excellent</Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Medium Range (100-500 miles)</span>
                      <div className="flex items-center gap-2">
                        <Progress value={87} className="w-20" />
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
                          Good
                        </Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Long Range (&gt;500 miles)</span>
                      <div className="flex items-center gap-2">
                        <Progress value={78} className="w-20" />
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
                          Fair
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preferred Transport Methods</CardTitle>
                  <CardDescription>By route distance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">0-50 miles</span>
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-purple-600" />
                        <span className="text-sm">Drone (89%)</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">50-300 miles</span>
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-red-600" />
                        <span className="text-sm">Emergency Vehicle (76%)</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">300+ miles</span>
                      <div className="flex items-center gap-2">
                        <Plane className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Air Transport (92%)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Real-time Tab */}
          <TabsContent value="realtime" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-green-600" />
                    Live Alerts
                  </CardTitle>
                  <CardDescription>Real-time transport notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">Transport Completed</div>
                        <div className="text-xs text-gray-600">Heart delivery NYC→Boston via drone</div>
                        <div className="text-xs text-gray-500">2 minutes ago</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">Weather Delay</div>
                        <div className="text-xs text-gray-600">Drone route Chicago→Detroit delayed 15min</div>
                        <div className="text-xs text-gray-500">8 minutes ago</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <Navigation className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">Route Optimized</div>
                        <div className="text-xs text-gray-600">Air transport LA→Seattle saved 23min</div>
                        <div className="text-xs text-gray-500">12 minutes ago</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">Critical Transport</div>
                        <div className="text-xs text-gray-600">Heart transport Miami→Tampa - 2hrs remaining</div>
                        <div className="text-xs text-gray-500">15 minutes ago</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    System Status
                  </CardTitle>
                  <CardDescription>Current network performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Drone Fleet Status</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600">Operational</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Emergency Network</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600">All Systems Go</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Air Traffic Control</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm text-yellow-600">Minor Delays</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Weather Conditions</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600">Favorable</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Active Transports Map</CardTitle>
                <CardDescription>Real-time transport locations and status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Interactive transport map would be displayed here</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>8 Drone Transports</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>12 Emergency Vehicles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>3 Air Transports</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>23 Total Active</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">1.2s</div>
                  <p className="text-sm text-gray-600">Avg Response Time</p>
                  <Badge variant="outline" className="mt-2 bg-green-50 text-green-700">
                    Excellent
                  </Badge>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">247</div>
                  <p className="text-sm text-gray-600">Active Users</p>
                  <Badge variant="outline" className="mt-2 bg-blue-50 text-blue-700">
                    Online Now
                  </Badge>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">12%</div>
                  <p className="text-sm text-gray-600">System Load</p>
                  <Badge variant="outline" className="mt-2 bg-purple-50 text-purple-700">
                    Optimal
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
