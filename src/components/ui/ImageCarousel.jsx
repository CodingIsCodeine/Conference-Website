import React, { useEffect, useState, useRef } from "react";

/**
 * Full Pop-Out Expanding Carousel on Hover
 * -----------------------------------------------
 * ✅ Expands in BOTH width & height from the center
 * ✅ Continues sliding seamlessly during hover
 * ✅ Smooth, elegant zoom-out 3D feel
 * ✅ Looks premium and dynamic
 */

const ImageCarousel = ({ 
  images = [], 
  interval = 3000, 
  className = "",
  height = 280, 
  width = "90%", 
  maxWidth = 800 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
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

  return (
    <div
      className={`relative flex justify-center items-center my-8 transition-all duration-700 ease-in-out ${
        hovered ? "z-50" : "z-10"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        perspective: "1000px", // for depth
      }}
    >
      <div
        className={`relative overflow-hidden rounded-2xl border border-gray-200 shadow-md transition-all duration-700 ease-in-out ${
          hovered ? "shadow-2xl" : "shadow-md"
        } ${className}`}
        style={{
          width: hovered ? `${maxWidth * 1.2}px` : `${maxWidth}px`, // expand width
          height: hovered ? `${height * 1.3}px` : `${height}px`,   // expand height
          transform: hovered ? "scale(1.15) rotateX(3deg)" : "scale(1) rotateX(0deg)",
          transformOrigin: "center center",
          backgroundColor: "#fff",
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        tabIndex={0}
        role="region"
        aria-label="Image carousel"
      >
        {/* Slides */}
        {srcs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`carousel-${i}`}
            className={`absolute inset-0 w-full h-full object-cover object-center 
              transition-opacity duration-700 ease-in-out rounded-2xl 
              ${i === currentIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-2xl"></div>

        {/* Prev Button */}
        <button
          onClick={goToPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 
            rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center 
            justify-center text-gray-600 hover:bg-white hover:text-gray-800 
            transition-transform hover:scale-110"
          aria-label="Previous image"
        >
          ←
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 
            rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center 
            justify-center text-gray-600 hover:bg-white hover:text-gray-800 
            transition-transform hover:scale-110"
          aria-label="Next image"
        >
          →
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {srcs.map((_, i) => (
            <button
              key={i}
              onClick={() => goToIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 
                ${i === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300 opacity-70"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
