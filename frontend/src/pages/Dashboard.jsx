import React from 'react'
import { 
  Activity, 
  Calendar, 
  LineChart, 
  Heart,
  Brain,
  Dumbbell,
  Users,
  ArrowUp,
  ArrowDown,
  MessageSquare,
  Clock
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="bg-gray-50">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Welcome to Your Health Dashboard!</h2>
          <p className="opacity-90">Your health journey is looking positive today.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Heart Rate</p>
                <p className="text-2xl font-semibold">72 BPM</p>
              </div>
              <Heart className="h-8 w-8 text-red-500" />
            </div>
            <div className="flex items-center mt-2 text-green-500 text-sm">
              <ArrowUp className="h-4 w-4" />
              <span>3% from yesterday</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Sleep Quality</p>
                <p className="text-2xl font-semibold">85%</p>
              </div>
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
            <div className="flex items-center mt-2 text-green-500 text-sm">
              <ArrowUp className="h-4 w-4" />
              <span>5% better than last week</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Activity Level</p>
                <p className="text-2xl font-semibold">6,234</p>
              </div>
              <Dumbbell className="h-8 w-8 text-purple-500" />
            </div>
            <div className="flex items-center mt-2 text-red-500 text-sm">
              <ArrowDown className="h-4 w-4" />
              <span>12% below your goal</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Stress Level</p>
                <p className="text-2xl font-semibold">Low</p>
              </div>
              <Brain className="h-8 w-8 text-yellow-500" />
            </div>
            <div className="flex items-center mt-2 text-green-500 text-sm">
              <ArrowDown className="h-4 w-4" />
              <span>Improved from yesterday</span>
            </div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">AI Health Recommendations</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
              <Activity className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-medium">Increase Physical Activity</h4>
                <p className="text-gray-600 mt-1">Your activity level has decreased. Consider a 30-minute walk today to meet your daily goal.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
              <Heart className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h4 className="font-medium">Excellent Heart Health</h4>
                <p className="text-gray-600 mt-1">Your heart rate variability shows good recovery. Keep maintaining your current sleep schedule.</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">About Health Companion</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium mb-2">AI-Powered Insights</h4>
              <p className="text-gray-600">Advanced AI technology to provide personalized health recommendations.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium mb-2">Expert Support</h4>
              <p className="text-gray-600">Backed by healthcare professionals for accurate guidance.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-medium mb-2">24/7 Assistance</h4>
              <p className="text-gray-600">Round-the-clock support for your health-related queries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
