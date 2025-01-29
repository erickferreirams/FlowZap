import React, { useState } from 'react';
import { QrCode, Smartphone, Plus, Trash2, RefreshCw } from 'lucide-react';

interface WhatsAppInstance {
  id: string;
  name: string;
  phone: string;
  status: 'connected' | 'disconnected' | 'pending';
  lastConnection: string;
}

const Settings = () => {
  const [instances, setInstances] = useState<WhatsAppInstance[]>([
    {
      id: '1',
      name: 'Atendimento Principal',
      phone: '+55 11 99999-9999',
      status: 'connected',
      lastConnection: '2024-03-15 14:30'
    },
    {
      id: '2',
      name: 'Suporte Técnico',
      phone: '+55 11 98888-8888',
      status: 'disconnected',
      lastConnection: '2024-03-14 18:45'
    }
  ]);

  const [showQRCode, setShowQRCode] = useState(false);
  const [newInstance, setNewInstance] = useState({ name: '', phone: '' });

  const handleAddInstance = () => {
    if (newInstance.name && newInstance.phone) {
      const instance: WhatsAppInstance = {
        id: Date.now().toString(),
        name: newInstance.name,
        phone: newInstance.phone,
        status: 'pending',
        lastConnection: new Date().toISOString()
      };
      setInstances([...instances, instance]);
      setNewInstance({ name: '', phone: '' });
      setShowQRCode(true);
    }
  };

  const handleDeleteInstance = (id: string) => {
    setInstances(instances.filter(instance => instance.id !== id));
  };

  return (
    <div className="flex-1 bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Configurações do WhatsApp</h2>
          <p className="text-gray-500">Gerencie suas conexões do WhatsApp</p>
        </div>

        {/* Adicionar Nova Instância */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Adicionar Nova Instância</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome da Instância
              </label>
              <input
                type="text"
                value={newInstance.name}
                onChange={(e) => setNewInstance({ ...newInstance, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ex: Atendimento Principal"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número do WhatsApp
              </label>
              <input
                type="text"
                value={newInstance.phone}
                onChange={(e) => setNewInstance({ ...newInstance, phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="+55 11 99999-9999"
              />
            </div>
          </div>
          <button
            onClick={handleAddInstance}
            className="mt-4 flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Instância
          </button>
        </div>

        {/* QR Code Modal */}
        {showQRCode && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Conectar WhatsApp</h3>
              <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center mb-4">
                <QrCode className="h-48 w-48 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Abra o WhatsApp no seu celular e escaneie o QR Code para conectar
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowQRCode(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Lista de Instâncias */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Instâncias Conectadas</h3>
          <div className="space-y-4">
            {instances.map((instance) => (
              <div
                key={instance.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Smartphone className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900">{instance.name}</h4>
                    <p className="text-sm text-gray-500">{instance.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      instance.status === 'connected'
                        ? 'bg-green-100 text-green-700'
                        : instance.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {instance.status === 'connected'
                      ? 'Conectado'
                      : instance.status === 'pending'
                      ? 'Pendente'
                      : 'Desconectado'}
                  </span>
                  <button
                    onClick={() => setShowQRCode(true)}
                    className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                  >
                    <RefreshCw className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteInstance(instance.id)}
                    className="p-2 text-red-400 hover:text-red-600 rounded-lg hover:bg-red-50"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;