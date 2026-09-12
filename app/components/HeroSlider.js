"use client";

import { useEffect, useState } from "react";

const SLIDES = [
  "/hero/slide-1.jpg",
  "/hero/slide-2.jpg",
  "/hero/slide-3.jpg",
  "/hero/slide-4.jpg",
  "/hero/slide-5.jpg",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className={"hero-slide" + (i === index ? " active" : "")}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="hero-slider-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={"dot" + (i === index ? " active" : "")}
            aria-label={`슬라이드 ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
