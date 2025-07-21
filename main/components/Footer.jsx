import Link  from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#f3f4f6] text-gray-700 py-16 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-blue-900">Dr. Shubham Singhal</h3>
          <p className="text-sm mt-3 text-gray-600">
            Psychologist | Therapist | Writer <br />
            Helping you navigate through thought, emotion, and identity.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-800">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#about" className="hover:text-blue-600 transition">About</Link></li>
            <li><Link href="#services" className="hover:text-blue-600 transition">Services</Link></li>
            <li><Link href="#testimonials" className="hover:text-blue-600 transition">Testimonials</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-800">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/blog" className="hover:text-blue-600 transition">Blog</Link></li>
            {/* <li><span href="/faq" className="hover:text-blue-600 transition">FAQ</span></li> */}
            <li><Link href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</Link></li>
            {/* <li><span href="/privacy" className="hover:text-blue-600 transition">Terms of Service</span></li> */}
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-800">Connect</h4>
          <p className="text-sm mb-4 text-gray-600">
            <span className="block">Email: shubhamsinghal@gmail.com</span>
            <span className="block">Location: India</span>
          </p>
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/dr_shubhamsinghal/" aria-label="Instagram" className="text-gray-500 hover:text-blue-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.3.1 2.2.3 2.7.6.6.3 1.1.7 1.5 1.2.4.4.8.9 1.1 1.5.3.5.5 1.4.6 2.7.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.3-.3 2.2-.6 2.7-.3.6-.7 1.1-1.2 1.5-.4.4-.9.8-1.5 1.1-.5.3-1.4.5-2.7.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.3-.1-2.2-.3-2.7-.6-.6-.3-1.1-.7-1.5-1.2-.4-.4-.8-.9-1.1-1.5-.3-.5-.5-1.4-.6-2.7-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.3.3-2.2.6-2.7.3-.6.7-1.1 1.2-1.5.4-.4.9-.8 1.5-1.1.5-.3 1.4-.5 2.7-.6 1.3-.1 1.7-.1 4.9-.1zM12 0c-3.3 0-3.7 0-5 .1-1.3.1-2.3.3-3.1.6-.8.3-1.5.7-2.1 1.3-.6.6-1 1.3-1.3 2.1C.3 4.9.1 5.9.1 7.2.1 8.5 0 8.9 0 12s.1 3.5.1 4.8c.1 1.3.3 2.3.6 3.1.3.8.7 1.5 1.3 2.1.6.6 1.3 1 2.1 1.3.8.3 1.8.5 3.1.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.3-.3 3.1-.6.8-.3 1.5-.7 2.1-1.3.6-.6 1-1.3 1.3-2.1.3-.8.5-1.8.6-3.1.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.3-.6-3.1-.3-.8-.7-1.5-1.3-2.1-.6-.6-1.3-1-2.1-1.3-.8-.3-1.8-.5-3.1-.6C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.3a4.1 4.1 0 110-8.2 4.1 4.1 0 010 8.2zm6.4-11.8a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z" />
              </svg>
            </Link>
            {/* Add more social icons if needed */}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Dr. Shubham Singhal. All rights reserved.
      </div>
    </footer>
  );
}
