import { SmilePlus, Clock4 } from "lucide-react";
import Link from "next/link";

export default function BlogComingSoon() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-white text-center px-4 -mt-16">
      {/* Doodle Illustration */}
      {/* <div className="max-w-xs md:max-w-md mb-8">
        <img 
          src="/doodles/blog-thoughts.svg" 
          alt="Thoughtful doodle" 
          className="w-full object-contain"
        />
      </div> */}

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
        Blog's Brewing... ☕
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 max-w-lg">
        Shubham is putting thoughts to words. We're building a space filled with insight, emotion, and empathy. Mental health, healing, human stories — all coming soon.
      </p>

      {/* Icons section */}
      <div className="flex items-center justify-center gap-4 text-accent mt-6">
        <Clock4 className="w-6 h-6 stroke-[1.8]" />
        <span className="text-sm text-muted-foreground">
          New articles dropping soon. Stay tuned!
        </span>
      </div>

      {/* Button or redirect */}
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition"
      >
        <SmilePlus className="w-4 h-4" />
        Back to Home
      </Link>
    </div>
  );
}
