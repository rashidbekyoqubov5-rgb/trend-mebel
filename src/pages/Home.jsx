import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Home() {
  return (
    <div>
      <section className="bg-amber-100 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
            alt="Mebel"
            className="w-full md:w-1/2 h-72 object-cover rounded"
          />

          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Uyingizga qulaylik va go'zallik</h1>
            <p className="mb-4">Sifatli va zamonaviy mebellar eng qulay narxlarda</p>
            <ul className="mb-6 text-left inline-block">
              <li>✔ Gazalkent shahri bo'yicha bepul yetkazib berish</li>
              <li>✔ Barcha mebellarga 1 yil kafolat</li>
              <li>✔ Xohlagan o'lcham bo'yicha buyurtma</li>
            </ul>
            <br />
            <Link to="/products" className="bg-amber-700 text-white px-6 py-3 rounded">
              Mahsulotlarni ko'rish
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Mashhur mahsulotlar</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.slice(0, 12).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      <section className="bg-amber-700 text-white py-10 px-4">
        <div className="max-w-5xl mx-auto grid gap-6 grid-cols-2 md:grid-cols-4 text-center">
          <div>
            <p className="text-3xl font-bold">10+</p>
            <p>yillik tajriba</p>
          </div>
          <div>
            <p className="text-3xl font-bold">2000+</p>
            <p>mamnun mijoz</p>
          </div>
          <div>
            <p className="text-3xl font-bold">24</p>
            <p>xil mahsulot</p>
          </div>
          <div>
            <p className="text-3xl font-bold">1 yil</p>
            <p>kafolat</p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Bizning xizmatlar</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-bold mb-1">Buyurtma asosida</h3>
            <p>Xohlagan o'lcham, rang va dizayn bo'yicha mebel tayyorlab beramiz.</p>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-bold mb-1">Yetkazib berish</h3>
            <p>Mebelni uyingizgacha olib borib, o'rnatib beramiz.</p>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-bold mb-1">Kafolat va ta'mirlash</h3>
            <p>Barcha mahsulotlarga kafolat beramiz, kerak bo'lsa ta'mirlaymiz.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Qanday buyurtma beriladi?</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-center">
            <div>
              <p className="text-3xl font-bold text-amber-700">1</p>
              <p>Mahsulotni tanlang</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-700">2</p>
              <p>Bizga qo'ng'iroq qiling</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-700">3</p>
              <p>Narx va muddatni kelishamiz</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-700">4</p>
              <p>Uyingizga yetkazib beramiz</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Nima uchun Trend Mebel?</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-bold mb-1">Sifatli materiallar</h3>
            <p>Yog'och, MDF va sifatli mato ishlatamiz. Mebel uzoq yillar xizmat qiladi.</p>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-bold mb-1">Qulay narxlar</h3>
            <p>O'zimiz ishlab chiqarganimiz uchun narxlar arzon, oraliq vositachilar yo'q.</p>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-bold mb-1">Tez tayyorlash</h3>
            <p>Buyurtma 7–20 kun ichida tayyor bo'ladi, omborda bor mebellar esa shu kuni olib ketiladi.</p>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-bold mb-1">Zamonaviy dizayn</h3>
            <p>Hozirgi uslublar bo'yicha yangi modellarni muntazam qo'shib boramiz.</p>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-bold mb-1">Tajribali ustalar</h3>
            <p>Har bir mebel ustalar nazoratida qo'lda yig'iladi va tekshiriladi.</p>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-bold mb-1">O'rnatish xizmati</h3>
            <p>Mebelni uyingizga olib borib, joyiga o'rnatib beramiz.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Mebel turlari</h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-5 text-center">
            <Link to="/products" className="bg-amber-50 p-5 rounded hover:bg-amber-100">Divanlar</Link>
            <Link to="/products" className="bg-amber-50 p-5 rounded hover:bg-amber-100">Kreslolar</Link>
            <Link to="/products" className="bg-amber-50 p-5 rounded hover:bg-amber-100">Stollar</Link>
            <Link to="/products" className="bg-amber-50 p-5 rounded hover:bg-amber-100">Krovatlar</Link>
            <Link to="/products" className="bg-amber-50 p-5 rounded hover:bg-amber-100">Shkaflar</Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">To'lov va yetkazib berish</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-bold mb-2">To'lov usullari</h3>
            <ul className="list-disc pl-5">
              <li>Naqd pul</li>
              <li>Plastik karta orqali</li>
              <li>Bo'lib to'lash (kelishuv asosida)</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-bold mb-2">Yetkazib berish</h3>
            <ul className="list-disc pl-5">
              <li>Gazalkent shahri bo'yicha — bepul</li>
              <li>Toshkent viloyati — kelishilgan narxda</li>
              <li>O'rnatib berish xizmati mavjud</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">Bizning ustalar</h2>
          <p className="text-center mb-6">Mebellarimiz tajribali ustalar qo'lida tayyorlanadi</p>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
            <img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600" alt="Usta" className="h-48 w-full object-cover rounded" />
            <img src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600" alt="Usta" className="h-48 w-full object-cover rounded" />
            <img src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600" alt="Usta" className="h-48 w-full object-cover rounded" />
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600" alt="Usta" className="h-48 w-full object-cover rounded" />
            <img src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600" alt="Usta" className="h-48 w-full object-cover rounded" />
            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600" alt="Usta" className="h-48 w-full object-cover rounded" />
            <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600" alt="Usta" className="h-48 w-full object-cover rounded" />
            <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600" alt="Mebel" className="h-48 w-full object-cover rounded" />
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600" alt="Mebel" className="h-48 w-full object-cover rounded" />
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600" alt="Ish jarayoni" className="h-48 w-full object-cover rounded" />
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" alt="Jamoa" className="h-48 w-full object-cover rounded" />
            <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600" alt="Jamoa" className="h-48 w-full object-cover rounded" />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Biz haqimizda</h2>
          <p className="text-center mb-8">
            Trend Mebel — Gazalkent shahrida joylashgan mebel do'koni va ishlab chiqarish
            sexi. Biz uy, ofis va oshxona uchun sifatli mebellar tayyorlaymiz.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-center">
            <div className="bg-amber-50 p-5 rounded">
              <h3 className="font-bold mb-1">Manzil</h3>
              <p>Toshkent viloyati, Gazalkent shahri</p>
            </div>
            <div className="bg-amber-50 p-5 rounded">
              <h3 className="font-bold mb-1">Telefon</h3>
              <p>+998 90 123 45 67</p>
            </div>
            <div className="bg-amber-50 p-5 rounded">
              <h3 className="font-bold mb-1">Ish vaqti</h3>
              <p>Dushanba – Shanba: 9:00 – 19:00</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/about" className="bg-amber-700 text-white px-6 py-3 rounded">
              Batafsil
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
