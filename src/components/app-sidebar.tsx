import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from './ui/sidebar';
import { Button } from './ui/button';
import { 
  Home, 
  FileText, 
  List, 
  Map, 
  Users, 
  User, 
  AlertTriangle,
  LogOut,
  Mic,
  Calendar,
} from 'lucide-react';

type Page = 'dashboard' | 'report' | 'my-issues' | 'map' | 'community' | 'profile' | 'voice-reporting' | 'campaigns';

interface AppSidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onEmergencyReport: () => void;
  onLogout: () => void;
}

export function AppSidebar({ currentPage, onNavigate, onEmergencyReport, onLogout }: AppSidebarProps) {
  const menuItems = [
    {
      title: 'Dashboard',
      icon: Home,
      page: 'dashboard' as Page,
    },
    {
      title: 'Report Issue',
      icon: FileText,
      page: 'report' as Page,
    },
    {
      title: 'My Issues',
      icon: List,
      page: 'my-issues' as Page,
    },
    {
      title: 'Map View',
      icon: Map,
      page: 'map' as Page,
    },
    {
      title: 'Community',
      icon: Users,
      page: 'community' as Page,
    },
    {
      title: 'Voice Reporting',
      icon: Mic,
      page: 'voice-reporting' as Page,
    },
    {
      title: 'Campaigns',
      icon: Calendar,
      page: 'campaigns' as Page,
    },
    {
      title: 'Profile',
      icon: User,
      page: 'profile' as Page,
    },
  ];

  return (
    <Sidebar className="bg-gradient-to-b from-purple-50 to-purple-100/80 border-purple-200/60">
      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.page}>
                  <SidebarMenuButton
                    onClick={() => onNavigate(item.page)}
                    isActive={currentPage === item.page}
                    className={`w-full justify-start p-3 rounded-xl font-medium transition-all duration-200 ${
                      currentPage === item.page
                        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                        : 'text-purple-700 hover:bg-white/60 hover:text-purple-900 hover:shadow-sm'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 mr-3 ${
                      currentPage === item.page ? 'text-white' : 'text-purple-600'
                    }`} />
                    <span className="font-medium">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-purple-200/40 space-y-3">
        <Button
          onClick={onEmergencyReport}
          className="w-full justify-start bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-xl py-3 shadow-lg transition-all duration-200"
        >
          <AlertTriangle className="w-5 h-5 mr-3" />
          Emergency Report
        </Button>
        
        <Button
          onClick={onLogout}
          variant="ghost"
          className="w-full justify-start text-purple-700 hover:text-purple-900 hover:bg-white/60 rounded-xl py-3 font-medium transition-all duration-200"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Sign Out
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}