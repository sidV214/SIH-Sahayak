import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Calendar,
  MapPin,
  Users,
  Clock,
  Search,
  Filter,
  Star,
  CheckCircle,
  TreePine,
  Recycle,
  Heart,
  Shield,
  ArrowLeft,
  Share2,
  Bookmark,
  UserPlus,
  Award,
  Target
} from 'lucide-react';

interface ModernCampaignsProps {
  onNavigate: (page: string) => void;
}

export function ModernCampaigns({ onNavigate }: ModernCampaignsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const campaigns = [
    {
      id: 1,
      title: 'Clean City Drive 2024',
      description: 'Join us for a city-wide cleanup initiative to make our streets cleaner and greener.',
      image: 'https://images.unsplash.com/photo-1748904040821-7a4acbee54af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBjbGVhbnVwJTIwZW52aXJvbm1lbnQlMjBjYW1wYWlnbnxlbnwxfHx8fDE3NTgxMDc1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Environment',
      status: 'upcoming',
      date: '2024-01-15',
      time: '09:00 AM',
      location: 'Central Park, Delhi',
      participants: 245,
      maxParticipants: 500,
      organizer: 'Delhi Municipal Corporation',
      tags: ['cleanup', 'environment', 'community'],
      impact: 'Expected to clean 50+ streets'
    },
    {
      id: 2,
      title: 'Tree Plantation Marathon',
      description: 'Help us plant 1000 trees across the city to combat pollution and create a greener environment.',
      image: 'https://images.unsplash.com/photo-1640772572732-ead4255b7860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRhdGlvbiUyMGNvbW11bml0eSUyMGV2ZW50fGVufDF8fHx8MTc1ODEwNzU2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Environment',
      status: 'ongoing',
      date: '2024-01-20',
      time: '07:00 AM',
      location: 'Various locations',
      participants: 89,
      maxParticipants: 200,
      organizer: 'Green Delhi Initiative',
      tags: ['trees', 'environment', 'air-quality'],
      impact: 'Target: 1000 trees planted'
    },
    {
      id: 3,
      title: 'Road Safety Awareness Week',
      description: 'Educational campaign to promote road safety and reduce traffic accidents in our city.',
      image: 'https://images.unsplash.com/photo-1688673085408-ef35dd30aae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwc2FmZXR5JTIwYXdhcmVuZXNzJTIwY2FtcGFpZ258ZW58MXx8fHwxNzU4MTA3NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Safety',
      status: 'completed',
      date: '2024-01-05',
      time: '10:00 AM',
      location: 'Multiple Schools',
      participants: 150,
      maxParticipants: 150,
      organizer: 'Traffic Police Department',
      tags: ['safety', 'education', 'traffic'],
      impact: '500+ students educated'
    },
    {
      id: 4,
      title: 'Digital Literacy for Seniors',
      description: 'Teaching elderly citizens how to use smartphones and digital services for better civic engagement.',
      image: 'https://images.unsplash.com/photo-1559645147-bbd3634fcd8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cGxvYWQlMjBjYW1lcmElMjBpbnRlcmZhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzU4MTA3NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Education',
      status: 'upcoming',
      date: '2024-01-25',
      time: '03:00 PM',
      location: 'Community Center',
      participants: 32,
      maxParticipants: 100,
      organizer: 'Digital India Initiative',
      tags: ['education', 'seniors', 'digital'],
      impact: 'Empower 100+ seniors'
    }
  ];

  const categories = ['all', 'Environment', 'Safety', 'Education', 'Health', 'Infrastructure'];
  const statuses = ['all', 'upcoming', 'ongoing', 'completed'];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming': return <Badge className="status-pending rounded-full">Upcoming</Badge>;
      case 'ongoing': return <Badge className="status-in-progress rounded-full">Ongoing</Badge>;
      case 'completed': return <Badge className="status-resolved rounded-full">Completed</Badge>;
      default: return <Badge className="status-pending rounded-full">Unknown</Badge>;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Environment': return <TreePine className="w-4 h-4" />;
      case 'Safety': return <Shield className="w-4 h-4" />;
      case 'Education': return <Star className="w-4 h-4" />;
      case 'Health': return <Heart className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || campaign.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || campaign.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => onNavigate('dashboard')}
              className="glass-card border-white/30"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Campaigns & Events</h1>
              <p className="text-gray-600">Join community initiatives and make a difference</p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-blue rounded-xl mx-auto mb-3 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">24</h3>
              <p className="text-sm text-gray-600">Active Campaigns</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-green rounded-xl mx-auto mb-3 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">1.2K</h3>
              <p className="text-sm text-gray-600">Participants</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-purple rounded-xl mx-auto mb-3 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">89</h3>
              <p className="text-sm text-gray-600">Completed</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-teal rounded-xl mx-auto mb-3 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">156</h3>
              <p className="text-sm text-gray-600">Impact Points</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="glass-card border-white/20 rounded-2xl floating-shadow mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search campaigns..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 rounded-xl border-white/30 bg-white/80"
                  />
                </div>
              </div>
              
              <div className="flex gap-3">
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="w-40 rounded-xl border-white/30 bg-white/80">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-32 rounded-xl border-white/30 bg-white/80">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Campaigns Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredCampaigns.map((campaign) => (
            <Card key={campaign.id} className="glass-card border-white/20 rounded-2xl floating-shadow overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {getStatusBadge(campaign.status)}
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 rounded-full">
                    {getCategoryIcon(campaign.category)}
                    <span className="ml-1">{campaign.category}</span>
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="sm" variant="ghost" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{campaign.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {campaign.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Event Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{campaign.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{campaign.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{campaign.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{campaign.participants}/{campaign.maxParticipants}</span>
                  </div>
                </div>

                {/* Organizer */}
                <div className="glass-card border-white/20 rounded-xl p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-blue rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Organized by</p>
                      <p className="text-xs text-gray-600">{campaign.organizer}</p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {campaign.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="rounded-full text-xs border-primary/30 text-primary">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                {/* Impact */}
                <div className="glass-card border-white/20 rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-sm text-gray-700">{campaign.impact}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  {campaign.status === 'upcoming' || campaign.status === 'ongoing' ? (
                    <Button className="flex-1 bg-primary-gradient hover:opacity-90 text-white rounded-xl">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Join Campaign
                    </Button>
                  ) : (
                    <Button variant="outline" className="flex-1 glass-card border-white/30">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      View Results
                    </Button>
                  )}
                  
                  <Button variant="outline" className="px-4 glass-card border-white/30">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredCampaigns.length === 0 && (
          <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-gray rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No campaigns found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setFilterCategory('all');
                  setFilterStatus('all');
                }}
                className="bg-primary-gradient hover:opacity-90 text-white rounded-xl"
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Create Campaign CTA */}
        <Card className="glass-card border-white/20 rounded-2xl floating-shadow mt-8">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-purple rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Have an idea for a campaign?</h3>
            <p className="text-gray-600 mb-6">Propose your own community initiative and make a lasting impact</p>
            <Button className="bg-primary-gradient hover:opacity-90 text-white px-8 py-3 rounded-xl">
              Propose Campaign
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}