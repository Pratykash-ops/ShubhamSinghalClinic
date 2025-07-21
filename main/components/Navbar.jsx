// components/Navbar.jsx
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
function MobileMenu({ menuOpen, toggleMenu }) {
  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="md:hidden z-[60] relative"
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

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full z-50 bg-white/90 backdrop-blur shadow-sm sticky top-0">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4 sm:px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="text-2xl  tracking-tight text-primary hover:opacity-80">
          <h2>TherapyWithShubham</h2>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-primary-light">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

       <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu}/>
      </nav>
    </header>
  );
}
