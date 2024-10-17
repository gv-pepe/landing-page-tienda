// src/Components/ProductCard.js
import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-[3/4] w-full">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
        />
        <button 
          className="absolute top-2 right-2 rounded-full bg-white/80 hover:bg-white p-2"
        >
          <Heart className="h-4 w-4 text-[#ffa43a]" />
          <span className="sr-only">Añadir a favoritos</span>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline">
            {product.discountPrice ? (
              <>
                <span className="text-lg font-bold text-[#ffa43a]">${product.discountPrice.toFixed(2)}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-lg font-bold text-[#ffa43a]">${product.price.toFixed(2)}</span>
            )}
          </div>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-600">{product.category}</span>
        </div>
        <button 
          className="w-full bg-[#ffa43a] hover:bg-[#ff8c00] text-white px-4 py-2 rounded-md"
          onClick={() => onAddToCart(product)} // Calls the function to add to cart
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Agregar al carrito
        </button>
      </div>
    </div>
  );
}
