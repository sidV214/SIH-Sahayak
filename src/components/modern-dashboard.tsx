import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  FileText, 
  Map, 
  BarChart3, 
  Users, 
  Plus,
  CheckCircle,
  Clock,
  AlertTriangle,
  Camera,
  Mic,
  MapPin,
  Star,
  TrendingUp,
  Award,
  Globe,
  MessageCircle,
  Calendar,
  Target
} from 'lucide-react';

interface ModernDashboardProps {
  onNavigate: (page: string) => void;
  onEmergencyReport: () => void;
}

export function ModernDashboard({ onNavigate, onEmergencyReport }: ModernDashboardProps) {
  const [darkMode, setDarkMode] = useState(false);

  // Mock data
  const userStats = {
    issuesReported: 12,
    issuesResolved: 8,
    communityPoints: 245,
    badgesEarned: 3
  };

  const recentIssues = [
    { id: 1, title: "Broken streetlight on MG Road", status: "resolved", priority: "medium", date: "2 days ago" },
    { id: 2, title: "Pothole near City Mall", status: "in-progress", priority: "high", date: "5 days ago" },
    { id: 3, title: "Overflowing garbage bin", status: "pending", priority: "urgent", date: "1 week ago" }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'resolved': return <Badge className="status-resolved rounded-full">Resolved</Badge>;
      case 'in-progress': return <Badge className="status-in-progress rounded-full">In Progress</Badge>;
      case 'urgent': return <Badge className="status-urgent rounded-full">Urgent</Badge>;
      default: return <Badge className="status-pending rounded-full">Pending</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, Citizen!</h1>
            <p className="text-gray-600">Let's make your community better today.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              onClick={onEmergencyReport}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl floating-shadow"
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              Emergency Report
            </Button>
            
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-gray-500" />
              <select className="bg-transparent text-sm text-gray-600 border-none outline-none">
                <option>English</option>
                <option>हिंदी</option>
                <option>বাংলা</option>
              </select>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card 
            className="glass-card border-white/20 rounded-2xl floating-shadow cursor-pointer group hover:scale-105 transition-all duration-300"
            onClick={() => onNavigate('report')}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-blue rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Report Issue</h3>
              <p className="text-sm text-gray-600">Submit new civic issues</p>
            </CardContent>
          </Card>

          <Card 
            className="glass-card border-white/20 rounded-2xl floating-shadow cursor-pointer group hover:scale-105 transition-all duration-300"
            onClick={() => onNavigate('my-issues')}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-teal rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Track Status</h3>
              <p className="text-sm text-gray-600">Monitor your reports</p>
            </CardContent>
          </Card>

          <Card 
            className="glass-card border-white/20 rounded-2xl floating-shadow cursor-pointer group hover:scale-105 transition-all duration-300"
            onClick={() => onNavigate('campaigns')}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-green rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Join Campaigns</h3>
              <p className="text-sm text-gray-600">Community events</p>
            </CardContent>
          </Card>

          <Card 
            className="glass-card border-white/20 rounded-2xl floating-shadow cursor-pointer group hover:scale-105 transition-all duration-300"
            onClick={() => onNavigate('voice-reporting')}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-purple rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Voice Report</h3>
              <p className="text-sm text-gray-600">Speak your concern</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Overview */}
            <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Your Impact Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-blue rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{userStats.issuesReported}</h3>
                    <p className="text-sm text-gray-600">Issues Reported</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-green rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{userStats.issuesResolved}</h3>
                    <p className="text-sm text-gray-600">Issues Resolved</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-purple rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{userStats.communityPoints}</h3>
                    <p className="text-sm text-gray-600">Community Points</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-teal rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{userStats.badgesEarned}</h3>
                    <p className="text-sm text-gray-600">Badges Earned</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Issues */}
            <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Recent Issues
                </CardTitle>
                <CardDescription>Track the progress of your recent reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentIssues.map((issue) => (
                    <div key={issue.id} className="flex items-center justify-between p-4 glass-card rounded-xl border-white/20">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 mb-1">{issue.title}</h4>
                        <p className="text-sm text-gray-600">{issue.date}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        {getStatusBadge(issue.status)}
                        <Button variant="ghost" size="sm" className="text-primary">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4 glass-card border-white/30"
                  onClick={() => onNavigate('my-issues')}
                >
                  View All Issues
                </Button>
              </CardContent>
            </Card>

            {/* Community Feed */}
            <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Community Activity
                </CardTitle>
                <CardDescription>See what's happening in your area</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 glass-card rounded-xl border-white/20">
                    <div className="w-8 h-8 bg-gradient-green rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm"><strong>Sarah M.</strong> marked streetlight repair as resolved</p>
                      <p className="text-xs text-gray-500">5 minutes ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 glass-card rounded-xl border-white/20">
                    <div className="w-8 h-8 bg-gradient-blue rounded-full flex items-center justify-center">
                      <Plus className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm"><strong>Rajesh K.</strong> reported a new water leakage issue</p>
                      <p className="text-xs text-gray-500">12 minutes ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 glass-card rounded-xl border-white/20">
                    <div className="w-8 h-8 bg-gradient-purple rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm"><strong>Community Drive:</strong> Tree plantation this weekend</p>
                      <p className="text-xs text-gray-500">1 hour ago</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4 glass-card border-white/30"
                  onClick={() => onNavigate('community')}
                >
                  View Community Feed
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Access */}
            <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Quick Access
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start glass-card border-white/30"
                  onClick={() => onNavigate('map')}
                >
                  <Map className="w-4 h-4 mr-2" />
                  Interactive Map
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start glass-card border-white/30"
                  onClick={() => onNavigate('voice-reporting')}
                >
                  <Mic className="w-4 h-4 mr-2" />
                  Voice Reporting
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start glass-card border-white/30"
                  onClick={() => onNavigate('campaigns')}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Community Campaigns
                </Button>
              </CardContent>
            </Card>

            {/* Achievement Progress */}
            <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Achievement Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Community Champion</span>
                    <span className="text-sm text-gray-500">8/10</span>
                  </div>
                  <Progress value={80} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">2 more resolved issues needed</p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Voice Leader</span>
                    <span className="text-sm text-gray-500">3/5</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">2 more voice reports needed</p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Community Connector</span>
                    <span className="text-sm text-gray-500">5/15</span>
                  </div>
                  <Progress value={33} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">10 more validations needed</p>
                </div>
              </CardContent>
            </Card>

            {/* Featured Campaign */}
            <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-green rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Clean City Drive</h3>
                  <p className="text-sm text-gray-600 mb-4">Join 250+ citizens this weekend for a community cleanup</p>
                  <Badge className="status-pending border rounded-full mb-4">This Weekend</Badge>
                  <Button 
                    className="w-full bg-gradient-green hover:opacity-90 text-white rounded-xl"
                    onClick={() => onNavigate('campaigns')}
                  >
                    Join Campaign
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Chatbot Button */}
      <Button 
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary-gradient hover:opacity-90 text-white floating-shadow z-50"
        onClick={() => {/* Handle chatbot */}}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
}