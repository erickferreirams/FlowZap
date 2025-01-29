import React from 'react';
import { MessageSquare, Users, BarChart3, Settings, LogOut } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 px-4 py-6">
      <div className="flex items-center mb-8">
        <MessageSquare className="h-8 w-8 text-blue-600" />
        <h1 className="ml-2 text-xl font-bold text-gray-800">FlowZap</h1>
      </div>
      
      <nav className="space-y-1">
        <SidebarItem
          icon={MessageSquare}
          text="Chats"
          active={currentView === 'chats'}
          onClick={() => onViewChange('chats')}
        />
        <SidebarItem
          icon={Users}
          text="Agents"
          active={currentView === 'agents'}
          onClick={() => onViewChange('agents')}
        />
        <SidebarItem
          icon={BarChart3}
          text="Analytics"
          active={currentView === 'analytics'}
          onClick={() => onViewChange('analytics')}
        />
        <SidebarItem
          icon={Settings}
          text="Settings"
          active={currentView === 'settings'}
          onClick={() => onViewChange('settings')}
        />
      </nav>
      
      <div className="absolute bottom-4 w-56">
        <div className="flex items-center px-4 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">John Doe</p>
            <p className="text-xs text-gray-500">Support Agent</p>
          </div>
          <LogOut className="h-4 w-4 ml-auto text-gray-400" />
        </div>
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ElementType;
  text: string;
  active?: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, text, active = false, onClick }) => {
  return (
    <div
      className={`flex items-center px-4 py-3 rounded-lg cursor-pointer ${
        active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      <Icon className="h-5 w-5" />
      <span className="ml-3 text-sm font-medium">{text}</span>
    </div>
  );
};

export default Sidebar;