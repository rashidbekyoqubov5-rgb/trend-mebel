import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Products() {
  const [category, setCategory] = useState('Barchasi')

  const categories = ['Barchasi', 'Divan', 'Kreslo', 'Stol', 'Krovat', 'Shkaf']

  const list =
    category === 'Barchasi'
      ? products
      : products.filter((item) => item.category === category)

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Mahsulotlar</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={
              category === c
                ? 'bg-amber-700 text-white px-4 py-1 rounded'
                : 'bg-white px-4 py-1 rounded shadow'
            }
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {list.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}

export default Products
