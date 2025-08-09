import React from 'react';
import { Hammer, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Oficios Segovia</h3>
                <p className="text-sm text-gray-400">Profesionales de confianza</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Conectamos a los segovianos con los mejores profesionales locales. 
              Encuentra fontaneros, electricistas, albañiles y más.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces útiles</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Términos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Segovia, España</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@oficiossegovia.es" className="text-gray-300 hover:text-white transition-colors duration-200">
                  info@oficiossegovia.es
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+34 921 XXX XXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 Oficios Segovia. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <span className="text-xs text-gray-500">Hecho con ❤️ para Segovia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}