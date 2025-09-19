import React, { useState, useEffect } from 'react';
import { AppSidebar } from './components/app-sidebar';
import { AppHeader } from './components/app-header';
import { AppFooter } from './components/app-footer';
import { SidebarProvider } from './components/ui/sidebar';
import { Button } from './components/ui/button';
import { Dialog, DialogContent } from './components/ui/dialog';
import { Alert, AlertDescription } from './components/ui/alert';
import { ModernLanding } from './components/modern-landing';
import { ModernDashboard } from './components/modern-dashboard';
import { ModernReportIssue } from './components/modern-report-issue';
import { MyIssues } from './components/my-issues';
import { InteractiveMap } from './components/interactive-map';
import { CommunityValidation } from './components/community-validation';
import { Profile } from './components/profile';
import { EmergencyReporting } from './components/emergency-reporting';
import { VoiceReporting } from './components/voice-reporting';
import { ModernCampaigns } from './components/modern-campaigns';
import { Chatbot } from './components/chatbot';
import { AlertTriangle, Wifi, WifiOff } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineBanner, setShowOfflineBanner] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineBanner(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <ModernLanding onLogin={handleLogin} />;
      case 'dashboard':
        return <ModernDashboard onNavigate={setCurrentPage} onEmergencyReport={() => setShowEmergencyModal(true)} />;
      case 'report':
        return <ModernReportIssue onNavigate={setCurrentPage} />;
      case 'my-issues':
        return <MyIssues onNavigate={setCurrentPage} />;
      case 'map':
        return <InteractiveMap onNavigate={setCurrentPage} />;
      case 'community':
        return <CommunityValidation onNavigate={setCurrentPage} />;
      case 'profile':
        return <Profile onNavigate={setCurrentPage} />;
      case 'voice-reporting':
        return <VoiceReporting onNavigate={setCurrentPage} />;
      case 'campaigns':
        return <ModernCampaigns onNavigate={setCurrentPage} />;
      default:
        return <ModernDashboard onNavigate={setCurrentPage} onEmergencyReport={() => setShowEmergencyModal(true)} />;
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        {showOfflineBanner && !isOnline && (
          <Alert className="rounded-none border-orange-200 bg-orange-50 text-orange-800">
            <WifiOff className="h-4 w-4" />
            <AlertDescription>
              You're currently offline. The app will sync your data when connection is restored.
              <Button
                variant="ghost"
                size="sm"
                className="ml-2 h-auto p-0 text-orange-800 hover:text-orange-900"
                onClick={() => setShowOfflineBanner(false)}
              >
                Dismiss
              </Button>
            </AlertDescription>
          </Alert>
        )}
        <ModernLanding onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-purple-50/30 to-purple-100/50">
        {showOfflineBanner && !isOnline && (
          <Alert className="absolute top-0 left-0 right-0 z-50 rounded-none border-orange-200 bg-orange-50 text-orange-800">
            <WifiOff className="h-4 w-4" />
            <AlertDescription>
              You're currently offline. The app will sync your data when connection is restored.
              <Button
                variant="ghost"
                size="sm"
                className="ml-2 h-auto p-0 text-orange-800 hover:text-orange-900"
                onClick={() => setShowOfflineBanner(false)}
              >
                Dismiss
              </Button>
            </AlertDescription>
          </Alert>
        )}
        
        <AppSidebar 
          currentPage={currentPage} 
          onNavigate={setCurrentPage}
          onEmergencyReport={() => setShowEmergencyModal(true)}
          onLogout={() => {
            setIsLoggedIn(false);
            setCurrentPage('landing');
          }}
        />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <AppHeader currentPage={currentPage} />
          
          <main className="flex-1 overflow-auto">
            <div className={`min-h-full ${showOfflineBanner && !isOnline ? "pt-14" : ""}`}>
              {renderCurrentPage()}
            </div>
          </main>
          
          <AppFooter />
        </div>

        <Dialog open={showEmergencyModal} onOpenChange={setShowEmergencyModal}>
          <DialogContent className="max-w-2xl">
            <EmergencyReporting onClose={() => setShowEmergencyModal(false)} />
          </DialogContent>
        </Dialog>

        {/* Chatbot */}
        <Chatbot isOpen={showChatbot} onToggle={() => setShowChatbot(!showChatbot)} />
      </div>
    </SidebarProvider>
  );
}