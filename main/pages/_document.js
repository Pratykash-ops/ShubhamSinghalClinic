import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.drshubhampsychologist.in/"
        />
        <meta
          property="og:title"
          content="Dr. Shubham | High-Performance Sports Psychologist"
        />
        <meta
          property="og:description"
          content="Elite mental conditioning, peak focus frameworks, and high-performance psychological counseling tailored for national athletes and teams."
        />
        <meta
          property="og:image"
          content="https://www.drshubhampsychologist.in/assets/psychology-og.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.drshubhampsychologist.in/"
        />
        <meta
          property="twitter:title"
          content="Dr. Shubham | High-Performance Sports Psychologist"
        />
        <meta
          property="twitter:description"
          content="Elite mental conditioning, peak focus frameworks, and high-performance psychological counseling tailored for national athletes and teams."
        />
        <meta
          property="twitter:image"
          content="https://www.drshubhampsychologist.in/assets/psychology-og.jpg"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
