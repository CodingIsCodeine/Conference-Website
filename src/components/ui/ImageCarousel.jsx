// ImageCarousel.jsx
import React, { useEffect, useState, useRef } from "react";

/**
 * Expanding Carousel on Hover
 * - Adaptive to any image dimension (portrait, landscape, square) — no cropping
 * - Subtle prev/next buttons, clickable dot indicators
 * - Touch swipe, keyboard navigation, auto-slide
 */
const ImageCarousel = ({
  images = [],
  interval = 5000,
  className = "",
  height = 280,
  maxWidth = 800,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const touchStartX = useRef(null);

  const srcs = images.map((img) =>
    img && typeof img === "object" && img.src ? img.src : img
  );
  const totalItems = srcs.length;
  if (!totalItems) return null;

  // Auto-slide
  useEffect(() => {
    if (interval <= 0) return;
    const id = setInterval(
      () => setCurrentIndex((i) => (i + 1) % totalItems),
      interval
    );
    return () => clearInterval(id);
  }, [interval, totalItems]);

  const goToPrev = () =>
    setCurrentIndex((i) => (i - 1 + totalItems) % totalItems);
  const goToNext = () =>
    setCurrentIndex((i) => (i + 1) % totalItems);

  // Touch swipe
  const handleTouchStart = (e) =>
    (touchStartX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) delta > 0 ? goToPrev() : goToNext();
    touchStartX.current = null;
  };

  // Keyboard nav
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") goToPrev();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <div
      className={`relative flex justify-center items-center my-8 ${
        hovered ? "z-50" : "z-10"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 transition-all duration-500 ease-in-out ${
          hovered ? "shadow-2xl" : "shadow-md"
        } ${className}`}
        style={{
          width: hovered ? `${maxWidth * 1.12}px` : `${maxWidth}px`,
          height: hovered ? `${height * 1.2}px` : `${height}px`,
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transformOrigin: "center center",
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        tabIndex={0}
        role="region"
        aria-label="Image carousel"
        onKeyDown={handleKeyDown}
      >
        {/* Slides */}
        {srcs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`carousel-${i + 1}`}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
              i === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            loading={i === currentIndex ? "eager" : "lazy"}
            decoding="async"
          />
        ))}

        {/* Subtle bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-2xl" />

        {/* Prev Button */}
        <button
          onClick={goToPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8
            rounded-full bg-white/90 border border-gray-100 shadow-sm
            flex items-center justify-center text-gray-600
            hover:bg-white hover:text-gray-800 transition-transform
            hover:scale-105 focus:outline-none"
          aria-label="Previous image"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 6L9 12L15 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8
            rounded-full bg-white/90 border border-gray-100 shadow-sm
            flex items-center justify-center text-gray-600
            hover:bg-white hover:text-gray-800 transition-transform
            hover:scale-105 focus:outline-none"
          aria-label="Next image"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {srcs.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "h-2.5 w-2.5 bg-green-500 scale-110"
                  : "h-2 w-2 bg-green-200 opacity-70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
