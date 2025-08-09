import React from 'react';
import { Search, X, Filter } from 'lucide-react';

interface SearchFiltersProps {
  searchTerm: string;
  selectedCategory: string;
  onSearchChange: (term: string) => void;
  onCategoryChange: (category: string) => void;
}

const categories = [
  'Todos',
  'Fontanero',
  'Electricista', 
  'Albañil',
  'Pintor',
  'Carpintero',
  'Cerrajero',
  'Jardinero',
  'Limpieza',
  'Reformas'
];

export function SearchFilters({ searchTerm, selectedCategory, onSearchChange, onCategoryChange }: SearchFiltersProps) {
  return (
    <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Busca el profesional que necesitas
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Utiliza los filtros para encontrar exactamente lo que buscas
          </p>
        </div>

        {/* Buscador mejorado */}
        <div className="relative mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar por nombre, especialidad o zona..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-12 py-4 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200 shadow-sm hover:shadow-md"
            />
            {searchTerm && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Filtros por categoría mejorados */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300">
            <Filter className="h-5 w-5" />
            <span className="font-medium">Filtrar por especialidad:</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}