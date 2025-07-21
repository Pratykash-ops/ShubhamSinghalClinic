import react from 'react'

// app/privacy/page.tsx (Next.js 13+ App Router)

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-zinc-800">
      <h1 className="text-4xl font-bold mb-4">🔒 Privacy Policy</h1>
      <p className="mb-6 text-lg text-zinc-600">
        Last updated: July 21, 2025
      </p>

      <section className="space-y-6">
        <p>
          We believe privacy isn't a feature. It's a human right. That's why this page
          is written in plain language — no jargon, no manipulation.
        </p>

        <h2 className="text-2xl font-semibold">🌱 What We Collect</h2>
        <p>
          We only collect <strong>anonymous usage data</strong> to understand how our
          site is used. This includes:
        </p>
        <ul className="list-disc list-inside ml-4 text-zinc-700">
          <li>Pages visited</li>
          <li>Device type & browser</li>
          <li>Country-level location</li>
        </ul>
        <p>
          That's it. No names, emails, or trackers. We don't know who you are —
          and that's on purpose.
        </p>

        <h2 className="text-2xl font-semibold">🛡️ Your Rights</h2>
        <p>
          Since we don't collect personal data, there's nothing to delete or edit.
          But if you ever feel unsure, reach out. We'll always talk human-to-human.
        </p>

        <h2 className="text-2xl font-semibold">🧠 Why We Do This</h2>
        <p>
          Anonymous data helps us make our platform better — not to market to you,
          not to follow you around the web. Just to fix bugs, track performance,
          and create smoother experiences.
        </p>

        <p>
          Questions? Feedback? Drop a line:{" "}
          <a
            href="mailto:pratykash.on@gmail.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            pratyaksh.on@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
