
import React from 'react';
import { useEffect, useRef } from 'react';
import PsychologicalIssuesMarquee from './Marque';

const symptoms = [
  { label: 'eating disorders', icon: '🍽️' },
  { label: 'body image issues', icon: '🪞' },
  { label: 'relationship issues', icon: '🧩' },
  { label: 'depression', icon: '🔮' },
  { label: 'anger management', icon: '💢' },
  { label: 'irrational fear', icon: '😨' },
  { label: 'cognitive distortion', icon: '🧠' },
  { label: 'gaslighting', icon: '🌀' },
  { label: 'procrastination', icon: '⏳' },
  { label: 'intrusive thoughts', icon: '🌫️' },
  { label: 'narcissism', icon: '🪞' },
  { label: 'social anxiety', icon: '🙈' },
  { label: 'ocd', icon: '🌟' },
  { label: 'addiction', icon: '🧪' },
  { label: 'burnout', icon: '🔥' },
  { label: 'anxiety', icon: '🔺' },
  { label: 'stress', icon: '✨' },
  { label: 'trauma', icon: '🧷' },
];

function MarqueeRow({ reverse = false }) {
  const ref = useRef(null);

  // Duplicate badges for seamless scroll
  const items = [...symptoms, ...symptoms];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let offset = 0;
    const step = 0.5; // Speed
    const animate = () => {
      offset += step * (reverse ? -1 : 1);
      el.style.transform = `translateX(${offset}px)`;
      if (Math.abs(offset) > el.scrollWidth / 2) {
        offset = 0;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, [reverse]);

  return (
    <div className="overflow-hidden whitespace-nowrap w-full my-6">
      <div
        ref={ref}
        className="flex gap-4 will-change-transform"
        style={{ animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {items.map((item, i) => (
          <span
            key={`${item.label}-${i}`}
            className="inline-flex items-center px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-medium shadow border border-gray-200"
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
const PsychologyProblems = () => {
  return (
    <section className="py-20" id="problems">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-600">
          Whatever you are feeling right now.
        </h2>
        <PsychologicalIssuesMarquee />
      </div>
    </section>
  );
};

export default PsychologyProblems;