import React, { useState } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import WeeklyProgressDashboard from './components/Dashboard/WeeklyProgressDashboard';
import CTODashboard from './components/Dashboard/CTODashboard';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'weekly', 'cto'
  const [audioData, setAudioData] = useState(null); // Will store base64 audio from backend

  const handleDashboardSelect = (dashboardId) => {
    setCurrentView(dashboardId);

    // Simulate receiving base64 audio from backend
    // In production, this would come from your API
    simulateAudioFromBackend();
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
    setAudioData(null); // Clear audio when going back
  };

  // Simulate receiving base64 audio from backend
  const simulateAudioFromBackend = () => {
    // This simulates what your backend would send
    // In real implementation, you'd fetch this from your API

    // Example: Generate a simple tone as base64 (for demo purposes)
    // In production, replace this with actual API call to get base64 audio

    // For now, we'll set a placeholder - you can replace this with actual base64 audio data
    const mockBase64Audio = null; // Set to null until you have real audio data

    setAudioData(mockBase64Audio);

    console.log('Audio data received from backend:', mockBase64Audio ? 'Audio loaded' : 'No audio data');
  };

  // Function to load audio from backend (you can call this when needed)
 const loadAudioFromBackend = async () => {
  try {
    // TEST AUDIO: Replace this with your actual API call later
    const testBase64Audio = "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhCSaFveSWKQcRAb7w6p5UEx6Q1/PSZy0NF4YR8NiGNwgVZ7zj53dKAB6O3O7KdSkLEluz5+SqYhoOWKXi8bNlGAkhhbDklywIFAGz5PKgVRERNqHe8rloGQgjhbDjlC0HDwOy4vCiWBUMS5/e8blpHAkhfrLklC0HD2m04u+uZhwKJYez5ZUqBxB1s+Hst2UZCSOEs+SVLQYRN6fg8bduLQ8XiL3q57JgEAydm93w0G8yDB6A0O7SbiYPFoS976ykXBEOS4fY8N2PLBAO";
    
    setAudioData(testBase64Audio);
    console.log('✅ Test audio loaded! You should hear a 2-second tone.',audioData);
    
  } catch (error) {
    console.error('Error loading audio:', error);
  }
};

  const renderCurrentView = () => {
    switch (currentView) {
      case 'weekly':
        return (
          <WeeklyProgressDashboard
            onBackToLanding={handleBackToLanding}
            base64Audio={audioData}
          />
        );
      case 'cto':
        return (
          <CTODashboard
            onBackToLanding={handleBackToLanding}
            base64Audio={audioData}
          />
        );
      default:
        return <LandingPage onDashboardSelect={handleDashboardSelect} />;
    }
  };

  return (
    <div className="App">
      {/* Development Helper - Remove in production */}
      {process.env.NODE_ENV === 'development' && currentView !== 'landing' && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={loadAudioFromBackend}
            className="px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-purple-300 text-xs font-medium transition-all"
          >
            Load Audio (Dev)
          </button>
        </div>
      )}

      {/* Render Current View */}
      {renderCurrentView()}
    </div>
  );
}

/*
To integrate with your backend:

1. Replace simulateAudioFromBackend() with actual API call:
   
   const fetchAudioFromBackend = async () => {
     try {
       const response = await fetch('/api/weekly-audio', {
         method: 'GET',
         headers: { 'Authorization': 'Bearer your-token' }
       });
       const data = await response.json();
       setAudioData(data.base64Audio); // Backend should return { base64Audio: "data:audio/wav;base64,..." }
     } catch (error) {
       console.error('Error fetching audio:', error);
     }
   };

2. Call this function when dashboard loads:
   useEffect(() => {
     if (currentView !== 'landing') {
       fetchAudioFromBackend();
     }
   }, [currentView]);

3. Backend should return base64 audio in format:
   {
     "base64Audio": "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhCSaFveSWKQcRAb7w6p5UEx6Q1/PSZy0NF4YR8NiGNwgVZ7zj53dKAB6O3O7K"
   }
*/

export default App;