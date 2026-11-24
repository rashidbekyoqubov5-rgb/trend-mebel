import { useState } from 'react'

function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Aloqa</h1>
      <p>Telefon: +998 90 123 45 67</p>
      <p className="mb-6">Manzil: Toshkent viloyati, Gazalkent shahri</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input className="border p-2 rounded" placeholder="Ismingiz" required />
        <input className="border p-2 rounded" placeholder="Telefon raqamingiz" required />
        <textarea className="border p-2 rounded" placeholder="Xabaringiz" required />
        <button className="bg-amber-700 text-white p-2 rounded">Yuborish</button>
      </form>

      {sent && <p className="text-green-700 mt-3">Xabaringiz yuborildi!</p>}
    </div>
  )
}

export default Contact
