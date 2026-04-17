import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const authLinks = [
  { label: 'Sign In', to: '/auth/signin' },
  { label: 'Sign Up', to: '/auth/signup' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-amber-900 bg-amber-900 text-amber-50'
      : 'border-transparent text-amber-500 hover:border-amber-900 hover:bg-amber-50 hover:text-amber-900',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-amber-900 bg-amber-100/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="BulldogEx" className="h-9 w-9 rounded-full border-2 border-amber-900 bg-amber-50 object-contain" />
          <div className="space-y-0.5">
            <p className="text-xl font-bold text-amber-900">BulldogEx Shop</p>
          </div>
        </NavLink>

        <nav aria-label="Primary navigation" className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
          {authLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={navLinkClassName}
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>  
      </div>
    </header>
  );
};

export default NavBar;
