function About() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Biz haqimizda</h1>

      <p className="mb-3">
        Trend Mebel — Gazalkent shahrida joylashgan mebel do'koni va ishlab chiqarish sexi.
        Biz uy, ofis va oshxona uchun zamonaviy mebellar tayyorlaymiz va sotamiz.
      </p>
      <p className="mb-6">
        Bizda tajribali ustalar ishlaydi. Har bir buyurtma sifatli materialdan tayyorlanadi va
        barcha mebellarga kafolat beriladi. Xohlagan o'lcham va dizayn bo'yicha buyurtma ham
        qabul qilamiz.
      </p>

      <h2 className="text-xl font-bold mb-2">Nima uchun biz?</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Sifatli material</li>
        <li>Qulay narxlar</li>
        <li>Buyurtma asosida tayyorlash</li>
        <li>Yetkazib berish va o'rnatish xizmati</li>
        <li>Kafolat</li>
      </ul>

      <h2 className="text-xl font-bold mb-2">Ma'lumotlar</h2>
      <div className="bg-white p-4 rounded shadow">
        <p><b>Manzil:</b> Toshkent viloyati, Gazalkent shahri</p>
        <p><b>Telefon:</b> +998 90 123 45 67</p>
        <p><b>Ish vaqti:</b> Dushanba – Shanba, 9:00 – 19:00</p>
        <p><b>Dam olish kuni:</b> Yakshanba</p>
      </div>
    </div>
  )
}

export default About
