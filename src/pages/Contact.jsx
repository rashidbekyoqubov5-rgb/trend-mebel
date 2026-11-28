import { PhoneIcon, PinIcon, ClockIcon } from '../components/Icons'
import { useState } from 'react'

function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    e.target.reset()
  }

  const input = 'w-full bg-stone-700 text-white placeholder-stone-400 rounded p-3 mb-3 outline-none'

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Keling, siz uchun ideal makon yaratamiz.</h1>
      <p className="text-sm text-stone-600 mb-5">
        Savollaringiz bormi yoki buyurtma bermoqchimisiz? Biz bilan bog'laning. Jamoamiz sizga
        yordam berishdan mamnun.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <div className="bg-stone-200 rounded-xl p-5 mb-3">
            <h2 className="font-bold mb-2 flex items-center gap-2"><PhoneIcon /> Telefon raqam</h2>
            <p className="text-xl font-semibold">+998 90 123 45 67</p>
            <p className="text-stone-600">Bizga qo'ng'iroq qiling</p>
          </div>

          <div className="bg-stone-200 rounded-xl p-5 mb-3">
            <h2 className="font-bold mb-2 flex items-center gap-2"><PinIcon /> Manzilimiz</h2>
            <p className="font-semibold">Toshkent viloyati, Gazalkent shahri</p>
            <p className="text-stone-600">Showroom va ofisimiz</p>
          </div>

          <div className="bg-stone-200 rounded-xl p-5 mb-3">
            <h2 className="font-bold mb-2 flex items-center gap-2"><ClockIcon /> Ish vaqtimiz</h2>
            <p className="font-semibold">Dushanba – Shanba</p>
            <p className="text-stone-600">09:00 – 18:00</p>
          </div>

          <p className="text-sm text-stone-600">Bizni kuzating: Instagram, Telegram, Facebook</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-stone-900 text-white rounded-xl p-5">
          <h2 className="text-xl font-bold mb-1">Xabar qoldiring</h2>
          <p className="text-sm mb-4">Siz bilan tez orada bog'lanamiz.</p>

          <label className="text-sm">Ismingiz</label>
          <input className={input} placeholder="Ismingizni kiriting" required />

          <label className="text-sm">Telefon raqamingiz</label>
          <input className={input} placeholder="+998 __ ___ __ __" required />

          <label className="text-sm">Xizmat turi</label>
          <select className={input} defaultValue="">
            <option value="" disabled>Mebel turini tanlang</option>
            <option>Divan</option>
            <option>Kreslo</option>
            <option>Stol</option>
            <option>Krovat</option>
            <option>Shkaf</option>
            <option>Buyurtma asosida</option>
          </select>

          <label className="text-sm">Xabaringiz</label>
          <textarea className={input + ' h-24'} placeholder="Xabaringizni yozing..." required />

          <button className="w-full bg-amber-200 text-stone-900 font-semibold rounded p-3">
            Xabar yuborish
          </button>

          {sent && <p className="text-green-400 mt-3">Xabaringiz yuborildi! Tez orada bog'lanamiz.</p>}
        </form>
      </div>

      <div className="bg-stone-200 rounded-xl p-5 mt-4">
        <h2 className="font-bold">Sizni kutamiz!</h2>
        <p className="text-sm text-stone-600">Sizning g'oyangiz — bizning navbatdagi loyihamiz.</p>
      </div>
    </div>
  )
}

export default Contact
