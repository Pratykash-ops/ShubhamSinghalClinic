// components/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({
  children,
  title = "Dr. Shubham Singhal | Psychologist",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Online therapy, workshops, and corporate consulting with Dr. Shubham Singhal."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="Therapist, Contact, Therapy, Shubham Singhal, Online therapy, Mental health support, mental support, psychologist"
        />
        <meta name="author" content="Dr. Shubham Singhal" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="flex flex-col min-h-screen font-sans scroll-smooth">
        <Navbar />
        <main className="flex-grow py-0">{children}</main>
        <Footer />

        {/* Floating Call Button */}
        <button
          onClick={() => {
            window.location.href = "tel:+918076449095";
          }}
          data-nosnippet
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 px-6 h-14 bg-blue-600 text-white rounded-full shadow-[0_4px_20px_rgb(37,99,235,0.4)] hover:bg-blue-700 hover:scale-105 hover:shadow-[0_8px_30px_rgb(37,99,235,0.6)] transition-all duration-300 font-semibold tracking-wide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Call Dr. Shubham
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 border border-white"></span>
          </span>
        </button>
      </div>
    </>
  );
}
