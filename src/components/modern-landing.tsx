import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  FileText, 
  Map, 
  BarChart3, 
  Users, 
  Globe, 
  Mail,
  CheckCircle,
  Clock,
  AlertTriangle,
  Camera,
  Mic,
  MapPin,
  Star,
  Shield
} from 'lucide-react';
import sahayakLogo from 'figma:asset/96c0b48589a5d5909a2db76beff2c32979c4c8c1.png';

interface ModernLandingProps {
  onLogin: () => void;
}

export function ModernLanding({ onLogin }: ModernLandingProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('en');

  const handleGoogleLogin = () => {
    onLogin();
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      {/* Header */}
      <header className="p-6 flex justify-between items-center glass-card border-b-0 rounded-none">
        <div className="flex items-center gap-3">
          <img 
            src={sahayakLogo} 
            alt="Sahayak Logo" 
            className="h-10 w-auto"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-40 glass-card border-white/30">
              <Globe className="w-4 h-4 mr-2 text-primary" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">🇺🇸 English</SelectItem>
              <SelectItem value="hi">🇮🇳 हिंदी</SelectItem>
              <SelectItem value="bn">🇧🇩 বাংলা</SelectItem>
              <SelectItem value="ta">🇮🇳 தமிழ்</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" className="glass-card border-white/30">
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1688306141976-0a8ef8c3f585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMGNpdHklMjBza3lsaW5lJTIwdXJiYW4lMjBjaXZpY3xlbnwxfHx8fDE3NTgxMDEyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Indian city skyline"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-purple text-white border-0 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Making Cities Better Together
            </Badge>
            
            <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Report Issues,
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Track Progress
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join millions of citizens making their communities better. Report civic issues, 
              track their resolution, and collaborate with your neighbors for positive change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-primary-gradient hover:opacity-90 text-white px-8 py-4 rounded-xl floating-shadow"
                onClick={onLogin}
              >
                <Camera className="w-5 h-5 mr-2" />
                Report an Issue Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="glass-card border-white/30 px-8 py-4 rounded-xl"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Explore Issues
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-green rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">2.5M+</h3>
                  <p className="text-gray-600">Issues Resolved</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-teal rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">1.2M+</h3>
                  <p className="text-gray-600">Active Citizens</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-purple rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">500+</h3>
                  <p className="text-gray-600">Cities Connected</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Everything You Need to Make a Difference
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Powerful tools designed for citizens to create lasting positive change in their communities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card border-white/20 rounded-2xl floating-shadow group hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-blue rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Smart Reporting</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed">
                    Upload photos, record voice notes, and auto-tag locations with GPS for comprehensive issue reporting
                  </CardDescription>
                  <div className="flex justify-center gap-2 mt-4">
                    <Badge className="status-pending border rounded-full">Photo Upload</Badge>
                    <Badge className="status-resolved border rounded-full">Voice Notes</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/20 rounded-2xl floating-shadow group hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-teal rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Map className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Interactive Maps</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed">
                    Visualize issues on dynamic maps with soft glowing pins and real-time clustering for better insights
                  </CardDescription>
                  <div className="flex justify-center gap-2 mt-4">
                    <Badge className="status-in-progress border rounded-full">Live Tracking</Badge>
                    <Badge className="status-urgent border rounded-full">Clustering</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/20 rounded-2xl floating-shadow group hover:scale-105 transition-transform duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-green rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Transparency Dashboard</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed">
                    Access public statistics, resolution timelines, and ward-wise heatmaps for complete transparency
                  </CardDescription>
                  <div className="flex justify-center gap-2 mt-4">
                    <Badge className="status-resolved border rounded-full">Public Stats</Badge>
                    <Badge className="status-pending border rounded-full">Heatmaps</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-primary-gradient rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Join Sahayak Today</CardTitle>
                <CardDescription className="text-base">
                  Start making a difference in your community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button 
                  onClick={handleGoogleLogin}
                  variant="outline" 
                  className="w-full glass-card border-white/30 py-3 rounded-xl"
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white/80 text-gray-500 rounded-full">or</span>
                  </div>
                </div>

                <form onSubmit={handleEmailLogin} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded-xl border-white/30 bg-white/80"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="rounded-xl border-white/30 bg-white/80"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary-gradient hover:opacity-90 text-white py-3 rounded-xl">
                    <Mail className="w-4 h-4 mr-2" />
                    Sign in with Email
                  </Button>
                </form>

                <p className="text-center text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Button variant="link" className="p-0 h-auto text-primary font-medium" onClick={onLogin}>
                    Sign up free
                  </Button>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white/80">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src={sahayakLogo} 
              alt="Sahayak Logo" 
              className="h-8 w-auto"
            />
          </div>
          <p className="text-gray-600 mb-4">Making cities better, one report at a time.</p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}