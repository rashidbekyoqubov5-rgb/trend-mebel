import { CheckIcon, ArrowUpRightIcon, SparkleIcon, DiamondIcon, PencilIcon, ShieldIcon, TruckIcon, ArrowRightIcon } from '../components/Icons'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto bg-stone-200 rounded-xl p-5 md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold mb-3">Makonlarga nafislik, hayotga qulaylik.</h2>
              <p className="text-stone-600 mb-4">
                Biz zamonaviy dizayn va yuqori sifatni birlashtirib, har bir xonadon uchun o'ziga
                xos mebellar yaratamiz.
              </p>
              <Link to="/about" className="font-semibold text-stone-700">
                Batafsil ma'lumot <ArrowUpRightIcon size={16} className="align-middle" />
              </Link>

              <hr className="my-5 border-stone-400" />

              <h3 className="text-sm font-bold text-stone-600 mb-3">BIZNING YO'NALISHLARIMIZ</h3>
              <ul className="space-y-2 mb-5">
                <li className="flex items-center gap-2"><CheckIcon size={18} /> Yotoqxona va mehmonxona mebellari</li>
                <li className="flex items-center gap-2"><CheckIcon size={18} /> Oshxona uchun individual yechimlar</li>
                <li className="flex items-center gap-2"><CheckIcon size={18} /> Zamonaviy shkaf va garderoblar</li>
              </ul>

              <div className="bg-stone-300 rounded p-4">
                <p className="text-sm font-bold text-stone-600">BIZNING TAMOYILIMIZ</p>
                <p className="text-xl italic font-semibold">"Sifat — har bir detalda."</p>
              </div>
            </div>

            <div>
              <img src="/images/about.jpg" alt="Interyer" className="w-full h-80 md:h-96 object-cover rounded-xl" />
              <p className="text-sm text-stone-600 mt-3 flex items-center gap-2"><SparkleIcon size={16} /> Har bir detalda mukammallik</p>
            </div>
          </div>

          <div className="bg-stone-900 text-amber-200 rounded-xl p-6 mt-8 grid gap-4 grid-cols-3">
            <div>
              <p className="text-2xl font-bold">10+</p>
              <p className="text-white text-sm">Yillik tajriba</p>
            </div>
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-white text-sm">Mamnun mijoz</p>
            </div>
            <div>
              <p className="text-2xl font-bold">1000+</p>
              <p className="text-white text-sm">Tayyor loyihalar</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">Nima uchun biz?</h3>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4 font-semibold text-sm">
            <p className="flex items-center gap-2"><DiamondIcon /> Premium sifat</p>
            <p className="flex items-center gap-2"><PencilIcon /> Noyob dizayn</p>
            <p className="flex items-center gap-2"><ShieldIcon /> Ishonch</p>
            <p className="flex items-center gap-2"><TruckIcon /> Yetkazib berish</p>
          </div>

          <Link
            to="/contact"
            className="flex justify-between bg-stone-300 rounded p-3 mt-6 font-semibold"
          >
            <span>Orzuyingizdagi makonni yarating.</span>
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-12">
        <h2 className="text-xl font-bold mb-2">Ma'lumotlar</h2>
        <div className="bg-white p-4 rounded shadow">
          <p><b>Manzil:</b> Toshkent viloyati, Gazalkent shahri</p>
          <p><b>Telefon:</b> +998 90 123 45 67</p>
          <p><b>Ish vaqti:</b> Dushanba – Shanba, 9:00 – 19:00</p>
          <p><b>Dam olish kuni:</b> Yakshanba</p>
        </div>
      </section>
    </div>
  )
}

export default About
