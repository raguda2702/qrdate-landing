import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h1 className="text-3xl font-bold">QRDate</h1>
</motion.div>


export default function LandingPage() {
  return (
    <div className="max-w-md mx-auto p-6 space-y-6 text-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">QRDate</h1>
        <p className="text-gray-600">Футболки с QR-кодом для знакомств и общения</p>
        <img src="/hero-qr.png" alt="QR футболка" className="w-full rounded" />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Как это работает?</h2>
        <ul className="text-left list-disc list-inside text-sm text-gray-700">
          <li>Создаёшь QR-код с профилем</li>
          <li>Заказываешь крутую футболку</li>
          <li>Люди сканируют и знакомятся</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Примеры дизайнов</h2>
        <div className="flex overflow-x-auto gap-4">
          <img src="/design1.png" className="w-40 h-40 object-cover rounded" alt="design 1" />
          <img src="/design2.png" className="w-40 h-40 object-cover rounded" alt="design 2" />
          <img src="/design3.png" className="w-40 h-40 object-cover rounded" alt="design 3" />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Готов начать?</h2>
        <Link to="/designer" className="block bg-blue-600 text-white py-2 rounded">🎨 Создать дизайн</Link>
        <Link to="/my-qr" className="block bg-green-600 text-white py-2 rounded">📲 Мой QR-код</Link>
      </div>
      <nav className="fixed bottom-0 left-0 right-0 flex justify-around bg-white border-t p-2">
        <Link to="/">🏠 Домой</Link>
        <Link to="/shop">🛍 Магазин</Link>
        <Link to="/scanner">📷 Сканер</Link>
        <Link to="/profile">👤 Профиль</Link>
      </nav>
    </div>
  );
}
