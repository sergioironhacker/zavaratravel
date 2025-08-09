import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsApp = () => {
    const message = "Hola! Quiero información sobre oficios en Segovia";
    window.open(`https://wa.me/34921000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip expandido */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 mb-2 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 transform transition-all duration-300">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                  Oficios Segovia
                </h4>
                <p className="text-xs text-green-500">En línea</p>
              </div>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            ¿Necesitas ayuda para encontrar un profesional? ¡Escríbenos!
          </p>
          <button
            onClick={handleWhatsApp}
            className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Iniciar conversación
          </button>
        </div>
      )}

      {/* Botón principal */}
      <button
        onClick={() => setShowTooltip(!showTooltip)}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
        aria-label="Contactar por WhatsApp"
      >
        {/* Efecto de ondas */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-10"></div>
        
        <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform duration-200 relative z-10" />
        
        {/* Indicador de notificación */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-white">1</span>
        </div>
      </button>
    </div>
  );
}