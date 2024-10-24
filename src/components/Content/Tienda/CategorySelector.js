import React from 'react';

export default function CategorySelector({ categories, selectedCategory, onSelectCategory }) {
  return (
    <nav className="bg-white mt-5 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          <select 
            className="w-[180px] border border-gray-300 rounded-md px-3 py-2"
            value={selectedCategory} // Muestra la categoría seleccionada
            onChange={(e) => onSelectCategory(e.target.value)} // Actualiza la selección
          >
            {/* Opción "Todas" como la opción predeterminada */}
            <option value="Todas">Todas</option>
            {/* Mapeo de las categorías pasadas como props */}
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}
