// components/Navbar.jsx
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिन्दी" },
    { code: "hinglish", label: "Hinglish (GenZ)" }
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition border rounded-full px-3 py-1.5"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{languages.find(l => l.code === lang)?.label}</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg z-50 overflow-hidden">
            {languages.map((l) => (
              <button
                key={l.code}
                className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition ${lang === l.code ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-700"}`}
                onClick={() => {
                  setLang(l.code);
                  setIsOpen(false);
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function MobileMenu({ menuOpen, toggleMenu, navItems }) {
  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="md:hidden z-[60] relative ml-4"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 h-fit bg-white text-primary flex flex-col items-center justify-center gap-8 p-6"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xl font-semibold hover:text-accent transition-colors "
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleMenu}
              className="absolute top-5 right-6"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-accent" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { label: "Home", href: "/" },
    { label: t("navAbout"), href: "/#about" },
    { label: t("navServices"), href: "/#services" },
    { label: "Blog", href: "/blog" },
    { label: t("navContact"), href: "/contact" },
  ];

  return (
    <header className="w-full z-50 bg-white/90 backdrop-blur shadow-sm sticky top-0">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4 sm:px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-blue-900 hover:opacity-80">
          <h2>Dr. Shubham Singhal</h2>
        </Link>

        {/* Desktop Nav */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-blue-600">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <LanguageSwitcher />
          <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} navItems={navItems}/>
        </div>
      </nav>
    </header>
  );
}
