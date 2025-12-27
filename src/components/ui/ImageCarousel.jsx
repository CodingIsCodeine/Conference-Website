// ImageCarousel.jsx
import React, { useEffect, useState, useRef } from "react";

/**
 * Full Pop-Out Expanding Carousel on Hover (keeps original sizing & behavior)
 * - Small subtle prev/next buttons (no blur)
 * - Clickable green dots below showing number of images
 * - Touch swipe, keyboard, auto-slide preserved
 * - Click image to subtly enlarge (NO modal, NO website blocking)
 */
const ImageCarousel = ({
  images = [],
  interval = 5000,
  className = "",
  height = 280,
  width = "90%",
  maxWidth = 800
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [zoomed, setZoomed] = useState(false); // 🔹 subtle click-zoom
  const touchStartX = useRef(null);

  const srcs = images.map(img =>
    img && typeof img === "object" && img.src ? img.src : img
  );
  const totalItems = srcs.length;
  if (!totalItems) return null;

  // Auto-slide
  useEffect(() => {
    if (interval <= 0 || !totalItems) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % totalItems);
    }, interval);
    return () => clearInterval(id);
  }, [interval, totalItems]);

  // Navigation
  const goToPrev = () => setCurrentIndex((i) => (i - 1 + totalItems) % totalItems);
  const goToNext = () => setCurrentIndex((i) => (i + 1) % totalItems);
  const goToIndex = (index) => setCurrentIndex(index);

  // Touch swipe
  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) goToPrev();
      else goToNext();
    }
    touchStartX.current = null;
  };

  // Keyboard nav
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") goToPrev();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <div
      className={`relative flex justify-center items-center my-8 transition-all duration-700 ease-in-out ${
        hovered || zoomed ? "z-50" : "z-10"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => zoomed && setZoomed(false)} // click outside → unzoom
      style={{ perspective: "1000px" }}
    >
      <div
        className={`relative overflow-hidden rounded-2xl border border-gray-200 shadow-md transition-all duration-700 ease-in-out ${
          hovered || zoomed ? "shadow-2xl" : "shadow-md"
        } ${className}`}
        style={{
          width: hovered || zoomed ? `${maxWidth * 1.2}px` : `${maxWidth}px`,
          height: hovered || zoomed ? `${height * 1.3}px` : `${height}px`,
          transform: zoomed
            ? "scale(1.25)"
            : hovered
            ? "scale(1.15) rotateX(3deg)"
            : "scale(1)",
          transformOrigin: "center center",
          backgroundColor: "#fff",
        }}
        onClick={(e) => e.stopPropagation()} // prevent outside click collapse
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
            alt={`carousel-${i}`}
            className={`absolute inset-0 w-full h-full object-cover object-center
              transition-opacity duration-700 ease-in-out rounded-2xl
              ${i === currentIndex ? "opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"}`}
            onClick={i === currentIndex ? () => setZoomed(z => !z) : undefined}
            loading={i === currentIndex ? "eager" : "lazy"}
            decoding="async"
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-2xl"></div>

        {/* Prev Button */}
        <button
          onClick={goToPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8
            rounded-full bg-white/90 border border-gray-100 shadow-sm flex items-center
            justify-center text-gray-600 hover:bg-white hover:text-gray-800
            transition-transform hover:scale-105 focus:outline-none"
          aria-label="Previous image"
          title="Previous"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8
            rounded-full bg-white/90 border border-gray-100 shadow-sm flex items-center
            justify-center text-gray-600 hover:bg-white hover:text-gray-800
            transition-transform hover:scale-105 focus:outline-none"
          aria-label="Next image"
          title="Next"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Green Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {srcs.map((_, i) => (
            <button
              key={i}
              onClick={() => goToIndex(i)}
              className={`rounded-full transition-all duration-300
                ${i === currentIndex ? "h-2.5 w-2.5 bg-green-500 scale-110" : "h-2 w-2 bg-green-200 opacity-70"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
