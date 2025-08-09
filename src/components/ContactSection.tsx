import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envío
    setIsSubmitted(true);
    
    // En una implementación real, aquí enviarías los datos a tu backend
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Información de contacto */}
          <div>
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50 mb-6">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contacto directo
              </span>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                ¿No encuentras lo que buscas?
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Cuéntanos qué necesitas y te ayudaremos a encontrar el profesional ideal para tu proyecto. 
                Respuesta garantizada en menos de 24 horas.
              </p>
            </div>

            {/* Información de contacto directo */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Teléfono</h4>
                  <p className="text-gray-600 dark:text-gray-400">921 XXX XXX</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">info@oficiossegovia.es</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                  <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Ubicación</h4>
                  <p className="text-gray-600 dark:text-gray-400">Segovia y provincia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
            {isSubmitted ? (
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  ¡Solicitud enviada!
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Te contactaremos pronto con los mejores profesionales para tu proyecto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Solicita tu presupuesto
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Tipo de servicio
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="fontaneria">Fontanería</option>
                    <option value="electricidad">Electricidad</option>
                    <option value="albañileria">Albañilería</option>
                    <option value="pintura">Pintura</option>
                    <option value="carpinteria">Carpintería</option>
                    <option value="cerrajeria">Cerrajería</option>
                    <option value="jardineria">Jardinería</option>
                    <option value="limpieza">Limpieza</option>
                    <option value="reformas">Reformas integrales</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Descripción del proyecto
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200 resize-none"
                    placeholder="Cuéntanos en detalle qué necesitas, cuándo lo necesitas y cualquier información relevante..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar solicitud gratuita
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}