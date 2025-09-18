import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo/logo.svg';
import { IconMenu2, IconX, IconHome, IconBook, IconInfoCircle, IconMail, IconLogin, IconUserPlus, IconSun, IconMoon } from '@tabler/icons-react';

const navItems = [
  { name: "Home", to: "/", icon: <IconHome size={20}/> },
  { name: "Courses", to: "/courses", icon: <IconBook size={20}/> },
  { name: "About", to: "/about", icon: <IconInfoCircle size={20}/> },
  { name: "Contact us", to: "/contact", icon: <IconMail size={20}/> },
  { name: "Login", to: "/login", icon: <IconLogin size={20}/> },
  { name: "Signup", to: "/signup", icon: <IconUserPlus size={20}/> },
];

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const navLinks = navItems.slice(0, 4);
  const authLinks = navItems.slice(4);

  return (
    <>
      <header className="flex items-center justify-between bg-primary dark:bg-[#111b22] w-full fixed z-20 px-6 py-3 shadow transition-all">
        {/* Left: Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="h-10 w-10" />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <ul className="flex gap-6 items-center">
            {navLinks.map(({name, to, icon}) => (
              <li key={to}>
                <NavLink to={to} className={({isActive}) => isActive ? "text-sky-400 font-bold flex items-center gap-2" : "text-white dark:text-slate-200 hover:text-sky-300 flex items-center gap-2"}>
                  {icon} {name}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/login" className={({isActive}) => isActive ? "text-sky-400 flex items-center gap-2" : "text-white dark:text-slate-200 hover:text-sky-300 flex items-center gap-2"}>
            <IconLogin size={20}/>Login
          </NavLink>
          <NavLink to="/signup" className={({isActive}) => isActive ? "text-sky-400 flex items-center gap-2" : "text-white dark:text-slate-200 hover:text-sky-300 flex items-center gap-2"}>
            <IconUserPlus size={20}/>Signup
          </NavLink>
          <button onClick={toggleTheme} className="ml-4 text-xl text-white dark:text-slate-200" aria-label="Toggle Dark Mode" title="Toggle dark/light mode">
            {theme === 'dark' ? <IconMoon/> : <IconSun/>}
          </button>
        </nav>

        {/* Mobile: dark mode toggle and hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleTheme} className="text-lg text-white dark:text-slate-200" aria-label="Toggle Dark Mode">
            {theme === 'dark' ? <IconMoon/> : <IconSun/>}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Open Menu" className="text-white dark:text-slate-200">
            {menuOpen ? <IconX size={28}/> : <IconMenu2 size={28}/>}
          </button>
        </div>

        {/* Mobile menu drawer */}
        <div className={`fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className={`fixed right-0 top-0 h-full w-3/4 sm:w-1/2 bg-primary dark:bg-[#171b22] shadow-lg transition-transform ${menuOpen ? "translate-x-0" : "translate-x-full"} p-6`}>
            <div className="flex flex-col gap-6">
              {navLinks.map(({name, to, icon}) => (
                <NavLink key={to} to={to} onClick={() => setMenuOpen(false)}
                  className={({isActive}) => isActive ? "text-sky-400 font-bold flex items-center gap-3 text-lg" : "text-white dark:text-slate-200 hover:text-sky-300 flex items-center gap-3 text-lg"}>
                  {icon} {name}
                </NavLink>
              ))}
              <div className="border-b border-slate-200/30 my-2"></div>
              {authLinks.map(({name, to, icon}) => (
                <NavLink key={to} to={to} onClick={() => setMenuOpen(false)}
                  className={({isActive}) => isActive ? "text-sky-400 flex items-center gap-3 text-lg" : "text-white dark:text-slate-200 hover:text-sky-300 flex items-center gap-3 text-lg"}>
                  {icon} {name}
                </NavLink>
              ))}
              <div>
                <button onClick={toggleTheme} className="text-white dark:text-slate-200 mt-3 flex items-center gap-2 text-lg">
                  {theme === 'dark' ? <IconMoon/> : <IconSun/>}
                  {theme === 'dark' ? "Dark" : "Light"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="gapError h-[4.5rem]" />
    </>
  );
}

export default Header;
