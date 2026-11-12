function ProductCard({ product }) {
  return (
    <div className="bg-white rounded shadow">
      <img src={product.img} alt={product.name} className="h-48 w-full object-cover rounded-t" />
      <div className="p-4">
        <p className="text-sm text-amber-700">{product.category}</p>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="font-bold">{product.price} so'm</p>
      </div>
    </div>
  )
}

export default ProductCard
