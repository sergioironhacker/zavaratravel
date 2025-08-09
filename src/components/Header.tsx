import React from 'react';
import { Moon, Sun, Hammer, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleDark: () => void;
}

export function Header({ isDark, toggleDark }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/30 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-xl shadow-lg">
                <Hammer className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                Oficios Segovia
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Profesionales de confianza en tu ciudad
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Contact info for desktop */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Phone className="h-4 w-4" />
                <span className="font-medium">921 XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="font-medium">info@oficiossegovia.es</span>
              </div>
            </div>
            
            <button
              onClick={toggleDark}
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
              aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}