import React from 'react';
import { Heart, Shield, Users, Globe } from 'lucide-react';
import sahayakLogo from 'figma:asset/96c0b48589a5d5909a2db76beff2c32979c4c8c1.png';

export function AppFooter() {
  return (
    <footer className="border-t border-purple-200/60 bg-gradient-to-r from-purple-50 to-purple-100/80 backdrop-blur-md">
      <div className="px-4 lg:px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img 
                src={sahayakLogo} 
                alt="Sahayak Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-purple-700 leading-relaxed mb-4">
              Empowering citizens to make their communities better through collaborative civic engagement and transparent issue reporting.
            </p>
            <div className="flex items-center gap-4 text-xs text-purple-600">
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>1.2M+ Citizens</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="h-3 w-3" />
                <span>500+ Cities</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                <span>Secure & Private</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-purple-900 mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-xs text-purple-700">
              <li><a href="#" className="hover:text-purple-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">Community Guidelines</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-purple-900 mb-3 text-sm">Legal</h4>
            <ul className="space-y-2 text-xs text-purple-700">
              <li><a href="#" className="hover:text-purple-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-purple-900 transition-colors">Data Protection</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-6 pt-4 border-t border-purple-200/60 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-xs text-purple-600">
            © 2024 Sahayak. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-xs text-purple-600">
            <span>Made with</span>
            <Heart className="h-3 w-3 text-red-500 fill-current" />
            <span>for civic engagement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}