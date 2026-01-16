import React, { useEffect, useState } from "react"

const products = [
  {
    id: 1,
    title: "Боксерские перчатки",
    desc: "Профессиональные перчатки для бокса и муай-тай",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    price: "79$",
  },
  {
    id: 2,
    title: "Щитки для ног",
    desc: "Защита голени и стопы для спаррингов",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
    price: "49$",
  },
  {
    id: 3,
    title: "Шлем MMA",
    desc: "Надёжная защита головы на тренировках",
    img: "https://images.unsplash.com/photo-1599058917765-78d7b9b6f4f3",
    price: "59$",
  },
  {
    id: 4,
    title: "Бинты для рук",
    desc: "Фиксация кистей и защита суставов",
    img: "https://images.unsplash.com/photo-1612197527276-46a2f6a1bcd2",
    price: "15$",
  },
  {
    id: 5,
    title: "Рашгард",
    desc: "Одежда для MMA и интенсивных тренировок",
    img: "https://images.unsplash.com/photo-1621961458348-f013d219b50c",
    price: "35$",
  },
  {
    id: 6,
    title: "Шорты муай-тай",
    desc: "Лёгкие и удобные для боя и тренировок",
    img: "https://images.unsplash.com/photo-1617957743094-1c5a4b68d8db",
    price: "29$",
  },
]

const App = () => {
  const [theme, setTheme] = useState("light")
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  const buyHandler = () => {
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 2500)
  }

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">URBAN DRIP</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Shop</a></li>
            <li><a>Cart</a></li>
          </ul>
        </div>

        <div className="navbar-end">
          <label className="flex gap-2 items-center cursor-pointer">
            <span>☀️</span>
            <input
              type="checkbox"
              className="toggle"
              checked={theme === "dark"}
              onChange={(e) =>
                setTheme(e.target.checked ? "dark" : "light")
              }
            />
            <span>🌙</span>
          </label>
        </div>
      </div>

      <section className="py-10">
        <div className="max-w-5xl mx-auto">
          <div className="carousel w-full rounded-box shadow-lg">
            <div className="carousel-item w-full">
              <img
                src="https://premiumproductphotos.com/wp-content/uploads/2023/07/boxing-gloves-toronto-product-photography.webp"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://media.posterstore.com/site_images/6859e6a8c307ab98cee8d953_1812607717_8107-5.jpg"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {showAlert && (
        <div className="max-w-md mx-auto mb-6">
          <div className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Покупка успешно подтверждена!</span>
          </div>
        </div>
      )}

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Экипировка для бойцов 🥊
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="card bg-base-100 shadow-md hover:shadow-xl transition"
            >
              <figure className="px-6 pt-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>

              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.title}</h2>
                <p className="text-sm text-base-content/70">
                  {item.desc}
                </p>
                <p className="font-bold text-lg">{item.price}</p>

                <div className="card-actions mt-4">
                  <button
                    onClick={buyHandler}
                    className="btn btn-primary"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item" />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
        <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
        </div>
      </footer>
    </div>
  )
}

export default App
