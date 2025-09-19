import React, { useState, useEffect } from 'react';
import { AppSidebar } from './components/app-sidebar.js';
import { Sidebar, SidebarContent, SidebarProvider } from './components/ui/sidebar.js';
import { Button } from './components/ui/button.js';
import { Dialog, DialogContent } from './components/ui/dialog.js';
import { Alert, AlertDescription } from './components/ui/alert.js';
import { LandingPage } from './components/landing-page.js';
import { Dashboard } from './components/dashboard.js';
import { ReportIssue } from './components/report-issue.js';
import { MyIssues } from './components/my-issues.js';
import { InteractiveMap } from './components/interactive-map.js';
import { CommunityValidation } from './components/community-validation.js';
import { TransparencyDashboard } from './components/transparency-dashboard.js';
import { Profile } from './components/profile.js';
import { EmergencyReporting } from './components/emergency-reporting.js';
import { VoiceReporting } from './components/voice-reporting.js';
import { Collaboration } from './components/collaboration.js';
import { Campaigns } from './components/campaigns.js';
import { Chatbot } from './components/chatbot.js';
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
        return <LandingPage onLogin={handleLogin} />;
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} onEmergencyReport={() => setShowEmergencyModal(true)} />;
      case 'report':
        return <ReportIssue onNavigate={setCurrentPage} />;
      case 'my-issues':
        return <MyIssues onNavigate={setCurrentPage} />;
      case 'map':
        return <InteractiveMap onNavigate={setCurrentPage} />;
      case 'community':
        return <CommunityValidation onNavigate={setCurrentPage} />;
      case 'transparency':
        return <TransparencyDashboard onNavigate={setCurrentPage} />;
      case 'profile':
        return <Profile onNavigate={setCurrentPage} />;
      case 'voice-reporting':
        return <VoiceReporting onNavigate={setCurrentPage} />;
      case 'campaigns':
        return <Campaigns onNavigate={setCurrentPage} />;
      case 'collaboration':
        return <Collaboration onNavigate={setCurrentPage} />;
      default:
        return <Dashboard onNavigate={setCurrentPage} onEmergencyReport={() => setShowEmergencyModal(true)} />;
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
        <LandingPage onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
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
        
        <main className="flex-1 overflow-auto">
          <div className={showOfflineBanner && !isOnline ? "pt-14" : ""}>
            {renderCurrentPage()}
          </div>
        </main>

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