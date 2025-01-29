import React from 'react';
import { Users, MessageSquare, Clock, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';

const Analytics = () => {
  const metrics = [
    {
      id: 1,
      name: "Total de Atendimentos",
      value: "1,234",
      change: "+12.5%",
      trend: "up",
      icon: MessageSquare
    },
    {
      id: 2,
      name: "Tempo Médio de Resposta",
      value: "2.5m",
      change: "-8.3%",
      trend: "down",
      icon: Clock
    },
    {
      id: 3,
      name: "Clientes Ativos",
      value: "856",
      change: "+5.2%",
      trend: "up",
      icon: Users
    },
    {
      id: 4,
      name: "Taxa de Resolução",
      value: "94%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp
    }
  ];

  return (
    <div className="flex-1 bg-gray-50 p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
        <p className="text-gray-500">Visão geral do desempenho</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <span
                  className={`flex items-center text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {metric.trend === 'up' ? (
                    <ArrowUp className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDown className="h-4 w-4 mr-1" />
                  )}
                  {metric.change}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">{metric.value}</h3>
              <p className="text-sm text-gray-500">{metric.name}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Volume de Atendimentos</h3>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
            <p className="text-gray-500">Gráfico de Volume de Atendimentos</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Satisfação do Cliente</h3>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
            <p className="text-gray-500">Gráfico de Satisfação</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;