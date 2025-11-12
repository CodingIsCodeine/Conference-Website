// ImageCarousel.jsx
import React, { useEffect, useState, useRef } from "react";
/**
 * Full Pop-Out Expanding Carousel on Hover (keeps original sizing & behavior)
 * - Small subtle prev/next buttons (no blur)
 * - Clickable green dots below showing number of images
 * - Touch swipe, keyboard, auto-slide preserved
 * - Click image to open in fixed-size modal
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState(null);
  const touchStartX = useRef(null);
  const srcs = images.map(img =>
    img && typeof img === "object" && img.src ? img.src : img
  );
  const totalItems = srcs.length;
  if (!totalItems) return null;

  const closeModal = () => {
    setIsModalOpen(false);
    setModalSrc(null);
  };

  // Auto-slide
  useEffect(() => {
    if (interval <= 0 || !totalItems) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % totalItems);
    }, interval);
    return () => clearInterval(id);
  }, [interval, totalItems]);

  // ESC key for modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [isModalOpen]);

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

  // Keyboard nav while focused
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") goToPrev();
    if (e.key === "ArrowRight") goToNext();
  };

  const openModal = (src) => {
    setModalSrc(src);
    setIsModalOpen(true);
  };

  return (
    <>
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
            /* KEPT EXACT SIZING BEHAVIOR YOU HAD */
            width: hovered ? `${maxWidth * 1.2}px` : `${maxWidth}px`, // expand width on hover
            height: hovered ? `${height * 1.3}px` : `${height}px`, // expand height on hover
            transform: hovered ? "scale(1.15) rotateX(3deg)" : "scale(1) rotateX(0deg)",
            transformOrigin: "center center",
            backgroundColor: "#fff",
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
              alt={`carousel-${i}`}
              className={`absolute inset-0 w-full h-full object-cover object-center
                transition-opacity duration-700 ease-in-out rounded-2xl
                ${i === currentIndex ? "opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"}`}
              onClick={i === currentIndex ? () => openModal(src) : undefined}
              loading={i === currentIndex ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-2xl"></div>
          {/* Prev Button - SMALL & SUBTLE (no blur) */}
          <button
            onClick={goToPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8
              rounded-full bg-white/90 border border-gray-100 shadow-sm flex items-center
              justify-center text-gray-600 hover:bg-white hover:text-gray-800
              transition-transform hover:scale-105 focus:outline-none"
            aria-label="Previous image"
            title="Previous"
            style={{ backdropFilter: "none" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {/* Next Button - SMALL & SUBTLE (no blur) */}
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8
              rounded-full bg-white/90 border border-gray-100 shadow-sm flex items-center
              justify-center text-gray-600 hover:bg-white hover:text-gray-800
              transition-transform hover:scale-105 focus:outline-none"
            aria-label="Next image"
            title="Next"
            style={{ backdropFilter: "none" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {/* Green Dots (clearly visible & clickable) */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Slide dots">
            {srcs.map((_, i) => (
              <button
                key={i}
                onClick={() => goToIndex(i)}
                className={`rounded-full transition-all duration-300 focus:outline-none
                  ${i === currentIndex ? "h-2.5 w-2.5 bg-green-500 scale-110" : "h-2 w-2 bg-green-200 opacity-70"}`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === currentIndex ? "true" : "false"}
                title={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {isModalOpen && modalSrc && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80"
          onClick={closeModal}
        >
          <div
            className="p-4 max-w-[800px] max-h-[600px] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalSrc}
              alt="Enlarged image"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default ImageCarousel;