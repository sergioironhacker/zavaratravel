import React from 'react';
import { Professional } from '../types/professional';
import { ProfessionalCard } from './ProfessionalCard';
import { Users, Award, Clock, MapPin } from 'lucide-react';

interface ProfessionalGridProps {
  professionals: Professional[];
}

export const ProfessionalGrid: React.FC<ProfessionalGridProps> = ({ professionals }) => {
  const stats = [
    { icon: Users, label: 'Profesionales', value: '150+' },
    { icon: Award, label: 'Años de experiencia', value: '25+' },
    { icon: Clock, label: 'Disponibilidad', value: '24/7' },
    { icon: MapPin, label: 'Zonas cubiertas', value: '15+' }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Professionals Grid */}
        {professionals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionals.map((professional) => (
              <ProfessionalCard key={professional.id} professional={professional} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <Users className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No se encontraron profesionales
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              Prueba ajustando los filtros de búsqueda o contacta con nosotros para encontrar el profesional que necesitas.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
              <MapPin className="w-5 h-5 mr-2" />
              Ver todos los profesionales
            </button>
          </div>
        )}
      </div>
    </section>
  );
};