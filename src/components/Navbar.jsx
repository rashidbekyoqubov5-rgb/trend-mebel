import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MenuIcon, CloseIcon } from './Icons'

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Hozirgi sahifadagi havola rangli va tagiga chiziq tushadi
  function linkClass(path) {
    if (location.pathname === path) {
      return 'font-bold text-amber-700 border-b-2 border-amber-700'
    }
    return 'hover:text-amber-700'
  }

  return (
    <header className="bg-white shadow">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold text-amber-800">
          Trend Mebel
        </Link>

        {/* Kompyuter uchun menyu */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className={linkClass('/')}>Bosh sahifa</Link>
          <Link to="/products" className={linkClass('/products')}>Mahsulotlar</Link>
          <Link to="/about" className={linkClass('/about')}>Biz haqimizda</Link>
          <Link to="/contact" className={linkClass('/contact')}>Aloqa</Link>
        </nav>

        {/* Gamburger tugma (telefon uchun) */}
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menyu">
          {open ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Telefon uchun ochiladigan menyu */}
      {open && (
        <nav className="md:hidden flex flex-col items-start border-t px-4 pb-3">
          <Link to="/" onClick={() => setOpen(false)} className={'my-2 ' + linkClass('/')}>Bosh sahifa</Link>
          <Link to="/products" onClick={() => setOpen(false)} className={'my-2 ' + linkClass('/products')}>Mahsulotlar</Link>
          <Link to="/about" onClick={() => setOpen(false)} className={'my-2 ' + linkClass('/about')}>Biz haqimizda</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className={'my-2 ' + linkClass('/contact')}>Aloqa</Link>
        </nav>
      )}
    </header>
  )
}

export default Navbar
