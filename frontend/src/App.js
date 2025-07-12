import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import WeeklyProgressDashboard from './components/Dashboard/WeeklyProgressDashboard';
import CTODashboard from './components/Dashboard/CTODashboard';
import './App.css';

// Main App component wrapped with router logic
function AppContent() {
  const [audioData, setAudioData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Simulate audio data when navigating to dashboard routes
  useEffect(() => {
    if (location.pathname === '/cto' || location.pathname === '/cso') {
      simulateAudioFromBackend();
    } else {
      setAudioData(null);
    }
  }, [location.pathname]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://3.110.188.16:8000/api/generate-weekly-summaries', {
        method: 'POST',
        headers: {
          'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
          'Connection': 'keep-alive',
          'Origin': 'http://3.110.188.16:8000',
          'Referer': 'http://3.110.188.16:8000/docs',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({}) // Empty body as per your curl request
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  useEffect(() => {
      fetchData();
  }, [])

  const handleDashboardSelect = (dashboardId) => {
    // Navigate to the appropriate route based on dashboard selection
    if (dashboardId === 'weekly' || dashboardId === 'cso') {
      navigate('/cso');
    } else if (dashboardId === 'cto') {
      navigate('/cto');
    }
  };

  const handleBackToLanding = () => {
    navigate('/');
    setAudioData(null);
  };

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

  return (
    <div className="App">
      <Routes>
        {/* Landing page route */}
        <Route
          path="/"
          element={<LandingPage onDashboardSelect={handleDashboardSelect} />}
        />

        {/* CSO Dashboard route (Weekly Progress Dashboard) */}
        <Route
          path="/cso"
          element={
            <WeeklyProgressDashboard
              onBackToLanding={handleBackToLanding}
              base64Audio={audioData}
            />
          }
        />

        {/* CTO Dashboard route */}
        <Route
          path="/cto"
          element={
            <CTODashboard
              onBackToLanding={handleBackToLanding}
              base64Audio={audioData}
            />
          }
        />

        {/* Fallback route - redirect to landing */}
        <Route path="*" element={<LandingPage onDashboardSelect={handleDashboardSelect} />} />
      </Routes>
    </div>
  );
}

// Main App component with Router wrapper
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;