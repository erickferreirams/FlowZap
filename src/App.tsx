import React, { useState } from 'react';
import { MessageSquare, Users, BarChart3, Settings, LogOut } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Agents from './components/Agents';
import Analytics from './components/Analytics';
import SettingsPage from './components/Settings';

function App() {
  const [currentView, setCurrentView] = useState('chats');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      {currentView === 'chats' && <Dashboard />}
      {currentView === 'agents' && <Agents />}
      {currentView === 'analytics' && <Analytics />}
      {currentView === 'settings' && <SettingsPage />}
    </div>
  );
}

export default App;