import logo from '../assets/img/nubdexchange_logo.png';

const Footer = () => {
  return (
    <div className="border-t-2 border-amber-900 bg-amber-900 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-amber-50 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="BulldogEx Logo" className="h-8 w-8" />
          <div>
            <p className="text-lg font-bold">BulldogEx Shop</p>
            <p className="mt-1 text-sm text-amber-300">Campus essentials, simple ordering.</p>
          </div>
        </div>
        <div className="flex gap-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-400">
          <a href="/products" className="hover:text-amber-200 transition">Products</a>
          <span>|</span>
          <a href="/" className="hover:text-amber-200 transition">Cart</a>
          <span>|</span>
          <a href="/about" className="hover:text-amber-200 transition">Pickup</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
