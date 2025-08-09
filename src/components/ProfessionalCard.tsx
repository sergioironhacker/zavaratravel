import React from 'react';
import { Phone, MapPin, MessageCircle, Clock, Euro, Award, Star, CheckCircle } from 'lucide-react';
import { Professional } from '../types/professional';

interface ProfessionalCardProps {
  professional: Professional;
}

export function ProfessionalCard({ professional }: ProfessionalCardProps) {
  const handleCall = () => {
    window.open(`tel:${professional.phone}`, '_self');
  };

  const handleWhatsApp = () => {
    const message = `Hola ${professional.name}, te contacto desde Oficios Segovia. Necesito información sobre ${professional.specialty}.`;
    window.open(`https://wa.me/34${professional.phone.replace(/\s+/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700">
      {/* Header con gradiente */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="relative flex items-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 border border-white/30">
            {professional.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-white text-xl leading-tight mb-1">
              {professional.name}
            </h4>
            <p className="text-blue-100 font-medium text-lg">
              {professional.specialty}
            </p>
            <div className="flex items-center mt-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-300 fill-current" />
                ))}
              </div>
              <span className="text-blue-100 text-sm ml-2">(4.9)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Ubicación */}
        <div className="flex items-center mb-4 text-gray-600 dark:text-gray-400">
          <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-3">
            <MapPin className="h-4 w-4" />
          </div>
          <span className="font-medium">{professional.zone}</span>
          <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
        </div>

        {/* Etiquetas de servicios mejoradas */}
        <div className="flex flex-wrap gap-2 mb-6">
          {professional.tags.map((tag, index) => {
            const isUrgent = tag.includes('24h');
            const isFree = tag.includes('gratis');
            const isExperience = tag.includes('experiencia');
            
            return (
              <span
                key={index}
                className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-lg ${
                  isUrgent 
                    ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 border border-red-200 dark:border-red-800'
                    : isFree
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 border border-green-200 dark:border-green-800'
                    : isExperience
                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400 border border-purple-200 dark:border-purple-800'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                }`}
              >
                {isUrgent && <Clock className="h-3 w-3 mr-1" />}
                {isFree && <Euro className="h-3 w-3 mr-1" />}
                {isExperience && <Award className="h-3 w-3 mr-1" />}
                {tag}
              </span>
            );
          })}
        </div>

        {/* Botones de contacto mejorados */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleCall}
            className="flex items-center justify-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-200 font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4 mr-2" />
            Llamar
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all duration-200 font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </button>
        </div>

        {/* Información adicional */}
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>Respuesta en menos de 1h</span>
            <span className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              Verificado
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}