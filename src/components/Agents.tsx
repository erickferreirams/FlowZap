import React from 'react';
import { Phone, Mail, Clock, CheckCircle2, XCircle } from 'lucide-react';

const Agents = () => {
  const agents = [
    {
      id: 1,
      name: "João Silva",
      role: "Suporte Técnico",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "online",
      activeChats: 3,
      resolvedToday: 12,
      averageResponseTime: "2m",
      satisfaction: 4.8
    },
    {
      id: 2,
      name: "Maria Santos",
      role: "Atendimento ao Cliente",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "busy",
      activeChats: 4,
      resolvedToday: 15,
      averageResponseTime: "1m",
      satisfaction: 4.9
    },
    {
      id: 3,
      name: "Pedro Costa",
      role: "Vendas",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      status: "offline",
      activeChats: 0,
      resolvedToday: 8,
      averageResponseTime: "3m",
      satisfaction: 4.7
    }
  ];

  return (
    <div className="flex-1 bg-gray-50 p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Agentes</h2>
        <p className="text-gray-500">Gerencie sua equipe de atendimento</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <div key={agent.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={agent.avatar}
                  alt={agent.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
                  <p className="text-sm text-gray-500">{agent.role}</p>
                </div>
              </div>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  agent.status === 'online'
                    ? 'bg-green-100 text-green-700'
                    : agent.status === 'busy'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {agent.status === 'online' ? 'Online' : agent.status === 'busy' ? 'Ocupado' : 'Offline'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center text-sm font-medium text-gray-700">
                  <Phone className="h-4 w-4 mr-2" />
                  Chats Ativos
                </div>
                <p className="mt-1 text-2xl font-semibold text-gray-900">{agent.activeChats}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center text-sm font-medium text-gray-700">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Resolvidos
                </div>
                <p className="mt-1 text-2xl font-semibold text-gray-900">{agent.resolvedToday}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center text-sm font-medium text-gray-700">
                  <Clock className="h-4 w-4 mr-2" />
                  Tempo Médio
                </div>
                <p className="mt-1 text-2xl font-semibold text-gray-900">{agent.averageResponseTime}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center text-sm font-medium text-gray-700">
                  <Mail className="h-4 w-4 mr-2" />
                  Satisfação
                </div>
                <p className="mt-1 text-2xl font-semibold text-gray-900">{agent.satisfaction}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-end space-x-2">
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
                Ver Detalhes
              </button>
              <button className="px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg">
                Gerenciar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;