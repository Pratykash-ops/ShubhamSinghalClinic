// app/contact/page.tsx
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen text-gray-800 px-6 py-16 md:px-24 font-sans">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">Let's Connect</h1>
        <p className="text-lg text-gray-600">
          Whether you have questions, need support, or just want to say hi — feel free to reach out. I'm here to listen.
        </p>
        <div className="mt-12 flex flex-col gap-8">
          <div className="flex items-center justify-center gap-4">
            <Mail className="w-6 h-6 text-indigo-500" />
            <span className="text-lg font-medium">hello@drshubhamsinghal.com</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Phone className="w-6 h-6 text-pink-500" />
            <span className="text-lg font-medium">+91 98765 43210</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <MapPin className="w-6 h-6 text-teal-500" />
            <span className="text-lg font-medium">New Delhi, India</span>
          </div>
        </div>

        <div className="mt-12">
          <form className="bg-white p-8 rounded-2xl shadow-md space-y-6" action="https://formspree.io/f/meozengp"
  method="POST">
            <input
              type="text"
              name='username'
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
            <input
              type="email"
              name='email'
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
            <textarea
              placeholder="Your Message"
              name='message'
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
