import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold text-amber-800">
          Trend Mebel
        </Link>

        <nav className="flex gap-5">
          <Link to="/" className="hover:text-amber-700">Bosh sahifa</Link>
          <Link to="/products" className="hover:text-amber-700">Mahsulotlar</Link>
          <Link to="/about" className="hover:text-amber-700">Biz haqimizda</Link>
          <Link to="/contact" className="hover:text-amber-700">Aloqa</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
