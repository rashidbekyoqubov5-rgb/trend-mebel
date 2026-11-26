import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold text-amber-800">
          Trend Mebel
        </Link>

        {/* Kompyuter uchun menyu */}
        <nav className="hidden md:flex gap-5">
          <Link to="/" className="hover:text-amber-700">Bosh sahifa</Link>
          <Link to="/products" className="hover:text-amber-700">Mahsulotlar</Link>
          <Link to="/about" className="hover:text-amber-700">Biz haqimizda</Link>
          <Link to="/contact" className="hover:text-amber-700">Aloqa</Link>
        </nav>

        {/* Gamburger tugma (telefon uchun) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl leading-none"
          aria-label="Menyu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Telefon uchun ochiladigan menyu */}
      {open && (
        <nav className="md:hidden flex flex-col border-t px-4 pb-3">
          <Link to="/" onClick={() => setOpen(false)} className="py-2">Bosh sahifa</Link>
          <Link to="/products" onClick={() => setOpen(false)} className="py-2">Mahsulotlar</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="py-2">Biz haqimizda</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="py-2">Aloqa</Link>
        </nav>
      )}
    </header>
  )
}

export default Navbar
