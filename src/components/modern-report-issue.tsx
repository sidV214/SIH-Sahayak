import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Camera, 
  Mic, 
  MapPin, 
  Upload,
  X,
  Play,
  Square,
  RotateCcw,
  Send,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Clock,
  User,
  Shield,
  Volume2,
  FileText
} from 'lucide-react';

interface ModernReportIssueProps {
  onNavigate: (page: string) => void;
}

export function ModernReportIssue({ onNavigate }: ModernReportIssueProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    priority: '',
    anonymous: false,
    elderlyDisabled: false,
    location: '',
    photos: [] as File[],
    voice: null as File | null
  });
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitProgress, setSubmitProgress] = useState(0);

  const steps = [
    { id: 1, title: 'Voice + Photo Report', icon: Mic },
    { id: 2, title: 'Location & Priority', icon: MapPin },
    { id: 3, title: 'Review & Submit', icon: Send }
  ];

  const categories = [
    'Roads & Transportation',
    'Water & Sanitation',
    'Street Lighting',
    'Waste Management',
    'Public Safety',
    'Parks & Recreation',
    'Building & Construction',
    'Traffic & Parking'
  ];

  const priorities = [
    { value: 'low', label: 'Low Priority', color: 'bg-green-100 text-green-800' },
    { value: 'medium', label: 'Medium Priority', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'high', label: 'High Priority', color: 'bg-orange-100 text-orange-800' },
    { value: 'urgent', label: 'Urgent', color: 'bg-red-100 text-red-800' }
  ];

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, ...files].slice(0, 5) // Max 5 photos
    }));
  };

  const removePhoto = (index: number) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }));
  };

  const startRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    // Mock recording
    const interval = setInterval(() => {
      setRecordingTime(prev => {
        if (prev >= 120) { // Max 2 minutes
          stopRecording();
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Mock voice file
    const mockVoiceFile = new File(['mock'], 'voice_note.wav', { type: 'audio/wav' });
    setFormData(prev => ({ ...prev, voice: mockVoiceFile }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitProgress(0);
    
    // Mock submission progress
    const interval = setInterval(() => {
      setSubmitProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSubmitting(false);
          // Show success and navigate
          setTimeout(() => {
            onNavigate('my-issues');
          }, 2000);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
            currentStep >= step.id 
              ? 'bg-primary-gradient border-transparent text-white' 
              : 'border-gray-300 text-gray-400'
          }`}>
            {currentStep > step.id ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <step.icon className="w-5 h-5" />
            )}
          </div>
          {index < steps.length - 1 && (
            <div className={`w-12 h-0.5 mx-2 ${
              currentStep > step.id ? 'bg-primary' : 'bg-gray-300'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-8">
      {/* Helper Text */}
      <Card className="glass-card border-blue/20 rounded-2xl floating-shadow bg-gradient-to-r from-blue-50/80 to-purple-50/80">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-gradient-purple rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <Mic className="w-8 h-8 text-white animate-pulse" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Report issues mainly via Voice + Photo</h3>
          <p className="text-gray-600">Text description is optional - we prefer voice notes for faster reporting!</p>
        </CardContent>
      </Card>

      {/* Primary: Voice Recording */}
      <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Mic className="w-6 h-6 text-primary animate-pulse" />
            Voice Report (Primary)
          </CardTitle>
          <CardDescription className="text-base">
            Speak your concern clearly - this is the fastest way to report issues
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!formData.voice ? (
            <div className="glass-card border-white/20 rounded-xl p-8 text-center bg-gradient-to-br from-purple-50/50 to-blue-50/50">
              <div className="w-24 h-24 bg-gradient-purple rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Mic className="w-12 h-12 text-white" />
              </div>
              
              {isRecording ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-red-500 font-semibold text-lg">Recording... {Math.floor(recordingTime / 60)}:{(recordingTime % 60).toString().padStart(2, '0')}</span>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      onClick={stopRecording}
                      size="lg"
                      className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl text-lg"
                    >
                      <Square className="w-6 h-6 mr-3" />
                      Stop Recording
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-gray-700 mb-6 text-lg">Tap the button and describe the civic issue you want to report</p>
                  <Button
                    onClick={startRecording}
                    size="lg"
                    className="bg-primary-gradient hover:opacity-90 text-white px-8 py-4 rounded-xl text-lg floating-shadow"
                  >
                    <Mic className="w-6 h-6 mr-3" />
                    Start Voice Recording
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="glass-card border-white/20 rounded-xl p-6 flex items-center justify-between bg-green-50/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-green rounded-xl flex items-center justify-center">
                  <Volume2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-lg">Voice report recorded ✓</p>
                  <p className="text-gray-600">{recordingTime} seconds</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="rounded-xl">
                  <Play className="w-4 h-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="destructive" 
                  onClick={() => setFormData(prev => ({ ...prev, voice: null }))}
                  className="rounded-xl"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Primary: Photo Upload */}
      <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Camera className="w-6 h-6 text-primary" />
            Photo Evidence (Primary)
          </CardTitle>
          <CardDescription className="text-base">
            Visual evidence helps authorities understand and resolve issues faster
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {formData.photos.map((photo, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(photo)}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-32 object-cover rounded-xl"
                />
                <Button
                  size="sm"
                  variant="destructive"
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full p-0"
                  onClick={() => removePhoto(index)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>

          {formData.photos.length < 5 && (
            <div className="relative">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePhotoUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="border-2 border-dashed border-primary/30 rounded-xl p-8 text-center hover:border-primary transition-colors bg-gradient-to-br from-blue-50/30 to-green-50/30">
                <div className="w-20 h-20 bg-gradient-blue rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Camera className="w-10 h-10 text-white" />
                </div>
                <p className="text-gray-700 mb-2 text-lg font-medium">Click to upload photos</p>
                <p className="text-gray-500">PNG, JPG up to 10MB each (Max 5 photos)</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Optional Fields */}
      <Card className="glass-card border-white/20 rounded-2xl floating-shadow opacity-70">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-600">
            <FileText className="w-5 h-5" />
            Additional Details (Optional)
          </CardTitle>
          <CardDescription>
            These fields are optional since you've provided voice + photo evidence
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Issue Title (Optional)
            </label>
            <Input
              placeholder="e.g., Broken streetlight on MG Road"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="rounded-xl border-gray-300 bg-gray-50/80 text-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Category (Optional)
            </label>
            <Select 
              value={formData.category} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
            >
              <SelectTrigger className="rounded-xl border-gray-300 bg-gray-50/80 text-gray-600">
                <SelectValue placeholder="Select issue category (optional)" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Text Description (Optional)
            </label>
            <Textarea
              placeholder="Additional details if needed... (Your voice note is the primary description)"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="rounded-xl border-gray-300 bg-gray-50/80 text-gray-600 min-h-[100px]"
              rows={4}
            />
          </div>

          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.anonymous}
                onChange={(e) => setFormData(prev => ({ ...prev, anonymous: e.target.checked }))}
                className="rounded"
              />
              <User className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Submit anonymously</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.elderlyDisabled}
                onChange={(e) => setFormData(prev => ({ ...prev, elderlyDisabled: e.target.checked }))}
                className="rounded"
              />
              <Shield className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Priority for elderly/disabled</span>
            </label>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderStep2 = () => (
    <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Location & Priority
        </CardTitle>
        <CardDescription>
          Help us locate the issue and set appropriate priority level
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Location
          </label>
          <div className="glass-card border-white/20 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-green rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Current Location Detected</p>
                <p className="text-sm text-gray-500">MG Road, Sector 14, New Delhi</p>
              </div>
            </div>
            <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Interactive Map Preview</p>
            </div>
          </div>
          
          <Input
            placeholder="Or enter address manually"
            value={formData.location}
            onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
            className="rounded-xl border-white/30 bg-white/80"
          />
        </div>

        {/* Priority */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Priority Level *
          </label>
          <div className="grid grid-cols-2 gap-3">
            {priorities.map((priority) => (
              <div
                key={priority.value}
                className={`p-4 glass-card rounded-xl border-2 cursor-pointer transition-all ${
                  formData.priority === priority.value
                    ? 'border-primary bg-primary/5'
                    : 'border-white/20 hover:border-primary/50'
                }`}
                onClick={() => setFormData(prev => ({ ...prev, priority: priority.value }))}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    priority.value === 'low' ? 'bg-green-500' :
                    priority.value === 'medium' ? 'bg-yellow-500' :
                    priority.value === 'high' ? 'bg-orange-500' : 'bg-red-500'
                  }`} />
                  <span className="font-medium text-gray-800">{priority.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderStep3 = () => (
    <Card className="glass-card border-white/20 rounded-2xl floating-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          Review & Submit
        </CardTitle>
        <CardDescription>
          Please review your voice + photo report before submitting
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Summary */}
        <div className="space-y-4">
          <div className="glass-card border-white/20 rounded-xl p-4">
            <h4 className="font-medium text-gray-800 mb-3">Primary Evidence</h4>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Voice Report:</strong> {formData.voice ? '✓ Recorded (' + recordingTime + ' seconds)' : '❌ No voice recording'}
              </p>
              <p className="text-gray-600">
                <strong>Photos:</strong> {formData.photos.length > 0 ? `✓ ${formData.photos.length} photo(s) uploaded` : '❌ No photos uploaded'}
              </p>
            </div>
          </div>

          {(formData.title || formData.category || formData.description) && (
            <div className="glass-card border-white/20 rounded-xl p-4">
              <h4 className="font-medium text-gray-800 mb-3">Optional Details</h4>
              <div className="space-y-1">
                {formData.title && <p className="text-gray-600"><strong>Title:</strong> {formData.title}</p>}
                {formData.category && <p className="text-gray-600"><strong>Category:</strong> {formData.category}</p>}
                {formData.description && <p className="text-gray-600"><strong>Description:</strong> {formData.description}</p>}
              </div>
            </div>
          )}

          <div className="glass-card border-white/20 rounded-xl p-4">
            <h4 className="font-medium text-gray-800 mb-3">Location & Priority</h4>
            <div className="space-y-1">
              <p className="text-gray-600"><strong>Location:</strong> Auto-detected (MG Road, Sector 14)</p>
              <p className="text-gray-600"><strong>Priority:</strong> {formData.priority || 'Not set'}</p>
            </div>
            <div className="flex gap-2 mt-3">
              {formData.anonymous && <Badge className="status-pending border rounded-full">Anonymous</Badge>}
              {formData.elderlyDisabled && <Badge className="status-urgent border rounded-full">Priority Access</Badge>}
            </div>
          </div>
        </div>

        {/* Submission */}
        {isSubmitting ? (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-blue rounded-2xl mx-auto flex items-center justify-center">
              <Upload className="w-8 h-8 text-white animate-pulse" />
            </div>
            <div>
              <p className="font-medium text-gray-800 mb-2">Submitting your voice + photo report...</p>
              <Progress value={submitProgress} className="h-2" />
              <p className="text-sm text-gray-500 mt-1">{submitProgress}% complete</p>
            </div>
          </div>
        ) : submitProgress === 100 ? (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-green rounded-2xl mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="font-medium text-gray-800 mb-2">Voice + Photo report submitted successfully!</p>
              <p className="text-sm text-gray-500">Reference ID: #SAH2024001234</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {(!formData.voice || formData.photos.length === 0) && (
              <div className="glass-card border-orange/20 rounded-xl p-4 bg-orange-50/50">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="font-medium text-orange-800">Incomplete Primary Evidence</p>
                    <p className="text-sm text-orange-600">
                      For best results, please add both voice recording and photos before submitting.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <Button
              onClick={handleSubmit}
              className="w-full bg-primary-gradient hover:opacity-90 text-white py-3 rounded-xl floating-shadow"
              disabled={!formData.voice && formData.photos.length === 0}
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Voice + Photo Report
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            onClick={() => onNavigate('dashboard')}
            className="glass-card border-white/30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Report Civic Issue</h1>
            <p className="text-gray-600">Help make your community better by reporting issues</p>
          </div>
        </div>

        {/* Step Indicator */}
        {renderStepIndicator()}

        {/* Current Step Content */}
        <div className="mb-8">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
        </div>

        {/* Navigation Buttons */}
        {!isSubmitting && submitProgress !== 100 && (
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="glass-card border-white/30"
            >
              Previous
            </Button>
            
            <Button
              onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
              disabled={currentStep === 3}
              className="bg-primary-gradient hover:opacity-90 text-white rounded-xl"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}