import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchFilters } from './components/SearchFilters';
import { ProfessionalGrid } from './components/ProfessionalGrid';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { useDarkMode } from './hooks/useDarkMode';
import { useSearch } from './hooks/useSearch';
import { professionals } from './data/professionals';

function App() {
  const { isDark, toggleDark } = useDarkMode();
  const { searchTerm, selectedCategory, filteredProfessionals, setSearchTerm, setSelectedCategory } = useSearch(professionals);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Header isDark={isDark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <SearchFilters 
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
        />
        <ProfessionalGrid professionals={filteredProfessionals} />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;