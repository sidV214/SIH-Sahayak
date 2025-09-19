import React from 'react';
import { Button } from './ui/button';
import { SidebarTrigger } from './ui/sidebar';
import { Bell, Search, Settings, User } from 'lucide-react';
import { Badge } from './ui/badge';
import sahayakLogo from 'figma:asset/96c0b48589a5d5909a2db76beff2c32979c4c8c1.png';

interface AppHeaderProps {
  currentPage: string;
}

export function AppHeader({ currentPage }: AppHeaderProps) {
  const getPageTitle = (page: string) => {
    switch (page) {
      case 'dashboard': return 'Dashboard';
      case 'report': return 'Report Issue';
      case 'my-issues': return 'My Issues';
      case 'map': return 'Map View';
      case 'community': return 'Community';
      case 'voice-reporting': return 'Voice Reporting';
      case 'campaigns': return 'Campaigns';
      case 'profile': return 'Profile';
      default: return 'Dashboard';
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-200/60 bg-gradient-to-r from-purple-50 to-purple-100/80 backdrop-blur-md">
      <div className="flex h-16 items-center px-4 lg:px-6">
        {/* Left side - Logo and sidebar trigger */}
        <div className="flex items-center gap-4">
          {/* Permanent logo in top-left corner */}
          <div className="flex items-center gap-3">
            <img 
              src={sahayakLogo} 
              alt="Sahayak Logo" 
              className="h-10 w-auto"
            />
          </div>
          
          {/* Sidebar trigger */}
          <SidebarTrigger className="bg-white/80 hover:bg-white border border-purple-200/60 shadow-sm rounded-xl w-10 h-10 transition-all duration-200" />
        </div>

        {/* Center - Page title */}
        <div className="flex-1 flex items-center justify-center md:justify-start md:ml-4">
          <h1 className="text-xl font-semibold text-purple-900">{getPageTitle(currentPage)}</h1>
        </div>

        {/* Right side - Search, notifications, settings, profile */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Search button */}
          <Button 
            variant="ghost" 
            size="sm"
            className="h-9 w-9 rounded-xl bg-white/60 hover:bg-white border border-purple-200/40 shadow-sm transition-all duration-200"
          >
            <Search className="h-4 w-4 text-purple-700" />
          </Button>

          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="sm"
            className="relative h-9 w-9 rounded-xl bg-white/60 hover:bg-white border border-purple-200/40 shadow-sm transition-all duration-200"
          >
            <Bell className="h-4 w-4 text-purple-700" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 p-0 text-xs text-white border-0">
              3
            </Badge>
          </Button>

          {/* Settings */}
          <Button 
            variant="ghost" 
            size="sm"
            className="hidden md:flex h-9 w-9 rounded-xl bg-white/60 hover:bg-white border border-purple-200/40 shadow-sm transition-all duration-200"
          >
            <Settings className="h-4 w-4 text-purple-700" />
          </Button>

          {/* Profile */}
          <Button 
            variant="ghost" 
            size="sm"
            className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 border border-purple-400 shadow-md transition-all duration-200"
          >
            <User className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>
    </header>
  );
}