// components/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children, title = "Dr. Shubham Singhal | Psychologist" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Online therapy, workshops, and corporate consulting with Dr. Shubham Singhal." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Therapist, Contact, Therapy, Shubham Singhal, Online therapy, Mental health support, mental support, psychologist" />
        <meta name="author" content="Dr. Shubham Singhal" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Therapy by Dr. Shubham Singhal " />
        <meta property="og:description" content="Reach out for therapy sessions, consultations, or collaborations." />
        {/* <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta property="og:type" content="website" /> */}
        <meta property="og:image" content="/static/session1.jpeg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Therapy by Dr. Shubham Singhal " />
        <meta name="twitter:description" content="Reach out for therapy sessions, consultations, or collaborations." />
        <meta name="twitter:image" content="/static/session1.jpeg" />
      </Head>

      <div className="flex flex-col min-h-screen font-sans scroll-smooth">
        <Navbar />
        <main className="flex-grow py-8">{children}</main>
        <Footer />
      </div>
    </>
  );
}
