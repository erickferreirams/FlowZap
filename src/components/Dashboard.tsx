import React from 'react';
import { Search, Filter, Clock } from 'lucide-react';

const Dashboard = () => {
  const chats = [
    {
      id: 1,
      name: "Maria Silva",
      lastMessage: "Gostaria de saber sobre o status do meu pedido #12345",
      time: "2m ago",
      unread: 2,
      status: "pending",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      name: "João Santos",
      lastMessage: "Obrigado pelo atendimento!",
      time: "5m ago",
      unread: 0,
      status: "resolved",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 3,
      name: "Ana Oliveira",
      lastMessage: "Preciso de ajuda com o pagamento",
      time: "15m ago",
      unread: 1,
      status: "active",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  const messages = [
    {
      id: 1,
      text: "Gostaria de saber sobre o status do meu pedido #12345",
      time: "2:30 PM",
      isAgent: false,
      sender: "Maria Silva",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      text: "Olá Maria! Claro, vou verificar o status do seu pedido agora mesmo.",
      time: "2:31 PM",
      isAgent: true,
      sender: "João Silva",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 3,
      text: "Seu pedido está em separação no estoque e deve ser enviado ainda hoje.",
      time: "2:32 PM",
      isAgent: true,
      sender: "João Silva",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <div className="flex-1 flex">
      {/* Chat List */}
      <div className="w-96 border-r border-gray-200 bg-white">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="ml-2 bg-transparent border-none focus:outline-none flex-1 text-sm"
            />
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
              All
            </button>
            <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-full">
              Unread
            </button>
            <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-full">
              Pending
            </button>
          </div>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Filter className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-8rem)]">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
            >
              <div className="flex items-center">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="h-10 w-10 rounded-full"
                />
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">{chat.name}</h3>
                    <p className="text-xs text-gray-500">{chat.time}</p>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                    {chat.unread > 0 && (
                      <span className="ml-2 bg-blue-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50">
        <div className="p-4 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Current chat"
                className="h-10 w-10 rounded-full"
              />
              <div className="ml-3">
                <h2 className="text-sm font-medium text-gray-900">Maria Silva</h2>
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-green-400 rounded-full"></span>
                  <span className="ml-2 text-xs text-gray-500">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Clock className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className={`flex items-end ${message.isAgent ? 'justify-end' : ''}`}>
              {!message.isAgent && (
                <img
                  src={message.avatar}
                  alt={message.sender}
                  className="h-8 w-8 rounded-full"
                />
              )}
              <div className={`${message.isAgent ? 'bg-blue-500 text-white' : 'bg-white'} rounded-lg p-3 max-w-md ${!message.isAgent ? 'ml-2' : 'mr-2'}`}>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  {message.sender}
                </div>
                <p className="text-sm">{message.text}</p>
                <span className={`text-xs ${message.isAgent ? 'text-blue-100' : 'text-gray-500'} mt-1 block`}>
                  {message.time}
                </span>
              </div>
              {message.isAgent && (
                <img
                  src={message.avatar}
                  alt={message.sender}
                  className="h-8 w-8 rounded-full"
                />
              )}
            </div>
          ))}
        </div>

        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-transparent border-none focus:outline-none text-sm"
            />
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;