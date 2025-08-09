import { useState, useMemo } from 'react';
import { Professional } from '../types/professional';

export function useSearch(professionals: Professional[]) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProfessionals = useMemo(() => {
    return professionals.filter((professional) => {
      const matchesSearch = 
        professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        professional.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        professional.zone.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = 
        selectedCategory === 'Todos' || 
        professional.specialty.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [professionals, searchTerm, selectedCategory]);

  return {
    searchTerm,
    selectedCategory,
    filteredProfessionals,
    setSearchTerm,
    setSelectedCategory
  };
}