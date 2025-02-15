import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Separator } from "../components/ui/separator";
import { Mail, Phone, MapPin, Calendar, User } from 'lucide-react';

// Hardcoded user data
const userData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  dateOfBirth: "1990-05-15",
  address: "123 Health Street, Medical City, MC 12345",
  bloodType: "O+",
  weight: "70 kg",
  height: "175 cm",
  allergies: ["Penicillin", "Peanuts"],
  medications: ["Vitamin D", "Iron supplements"],
  emergencyContact: {
    name: "Jane Doe",
    relation: "Spouse",
    phone: "+1 (555) 987-6543"
  },
  lastCheckup: "2024-02-15",
  upcomingAppointment: "2024-04-20"
};

const InfoItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-start space-x-3">
    <Icon className="w-5 h-5 text-muted-foreground mt-0.5" />
    <div className="flex-1">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  </div>
);

const MyProfile = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
        <p className="text-muted-foreground">
          Manage your personal information and health records
        </p>
      </div>

      {/* Basic Information Card */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.firstName}`} />
            <AvatarFallback>{userData.firstName[0]}{userData.lastName[0]}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{userData.firstName} {userData.lastName}</CardTitle>
            <CardDescription>Patient ID: #123456</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoItem icon={Mail} label="Email" value={userData.email} />
              <InfoItem icon={Phone} label="Phone" value={userData.phone} />
              <InfoItem icon={MapPin} label="Address" value={userData.address} />
              <InfoItem icon={Calendar} label="Date of Birth" value={userData.dateOfBirth} />
            </div>
          </div>

          <Separator />

          {/* Health Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Health Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-muted-foreground">Blood Type</p>
                <p className="text-2xl font-bold">{userData.bloodType}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-muted-foreground">Weight</p>
                <p className="text-2xl font-bold">{userData.weight}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-muted-foreground">Height</p>
                <p className="text-2xl font-bold">{userData.height}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Medical Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Medical Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Allergies</h4>
                <ul className="list-disc pl-4 space-y-1">
                  {userData.allergies.map((allergy, index) => (
                    <li key={index}>{allergy}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Current Medications</h4>
                <ul className="list-disc pl-4 space-y-1">
                  {userData.medications.map((medication, index) => (
                    <li key={index}>{medication}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Separator />

          {/* Emergency Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Emergency Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoItem 
                icon={User} 
                label="Name" 
                value={`${userData.emergencyContact.name} (${userData.emergencyContact.relation})`} 
              />
              <InfoItem 
                icon={Phone} 
                label="Emergency Phone" 
                value={userData.emergencyContact.phone} 
              />
            </div>
          </div>

          <Separator />

          {/* Appointments */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Appointments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoItem 
                icon={Calendar} 
                label="Last Checkup" 
                value={userData.lastCheckup} 
              />
              <InfoItem 
                icon={Calendar} 
                label="Upcoming Appointment" 
                value={userData.upcomingAppointment} 
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyProfile;
