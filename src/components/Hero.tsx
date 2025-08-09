import React from 'react';
import { MapPin, Users, Clock, Star, Shield, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 transition-all duration-300 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50">
              <Star className="h-4 w-4 mr-2" />
              Más de 500 profesionales verificados
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            Encuentra el profesional
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent mt-2">
              perfecto en Segovia
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Conectamos con los mejores profesionales y oficios de Segovia. 
            <span className="block mt-2 font-medium text-gray-800 dark:text-gray-200">
              Fontaneros, electricistas, albañiles y más, todos verificados y de confianza.
            </span>
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex flex-col items-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Toda Segovia</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 text-center">Cobertura completa en toda la provincia</span>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl mb-4">
                <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Verificados</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 text-center">Profesionales con garantía y referencias</span>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-4">
                <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Respuesta rápida</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 text-center">Contacto inmediato por teléfono o WhatsApp</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Ver todos los profesionales
            </button>
            <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
              Solicitar presupuesto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}