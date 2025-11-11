import React, { useEffect, useRef, useState } from "react";
// If you have shadcn/ui Card components, keep the import below. Otherwise replace <Card> and <CardContent>
// with plain divs (I left both options commented where appropriate).
import { Card, CardContent } from "@/components/ui/card";

/**
 * AboutSurat
 * - Replaces the About section text with the requested paragraph.
 * - Right side: an auto-advancing image slider with subtle left/right buttons.
 *
 * Props:
 *  - images: array of image URLs (strings). Prefer putting images in /public/images/ and using 
 *            paths like '/images/surat1.jpg'. You can also import images and pass the imported values.
 *  - interval: milliseconds between auto-advance (default 4000)
 *  - showDots: whether to show small pager dots (default true)
 */
export default function AboutSurat({
  images = [
    "/public/images/surat-2.jpg",
    "/public/images/surat-3.jpeg",
    "/public/images/surat-4.webp",
  ],
  interval = 4000,
  showDots = true,
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, images.length, interval]);

  function startTimer() {
    stopTimer();
    if (isHovered.current) return;
    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
  }

  function stopTimer() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  function goPrev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
    resetTimer();
  }
  function goNext() {
    setIndex((i) => (i + 1) % images.length);
    resetTimer();
  }
  function resetTimer() {
    stopTimer();
    startTimer();
  }

  function onMouseEnter() {
    isHovered.current = true;
    stopTimer();
  }
  function onMouseLeave() {
    isHovered.current = false;
    startTimer();
  }

  // keyboard navigation
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">About Surat</h2>

        <div className="max-w-4xl mx-auto">
          {/* Use Card if available, otherwise use a plain div with similar classes */}
          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left: text content */}
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Surat, one of India’s most dynamic cities on the banks of River Tapi, is renowned worldwide as the “Diamond City” and the “Textile Hub of India.” A thriving center for trade, chemicals, petrochemicals, and emerging technologies, the city seamlessly blends rich heritage with modern infrastructure.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Equally famous for its vibrant street food and diverse culinary traditions, Surat offers visitors a unique cultural and professional experience. Its progressive outlook and welcoming spirit make it an inspiring destination for global academic and industrial collaborations.
                  </p>
                </div>

                {/* Right: image slider */}
                <div>
                  <div
                    className="relative rounded-lg overflow-hidden bg-gray-50"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    aria-roledescription="carousel"
                  >
                    <div className="relative h-64 md:h-72 w-full">
                      {images.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`Surat ${i + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
                            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                          }`}
                          draggable={false}
                        />
                      ))}

                      {/* Left & Right buttons */}
                      <button
                        type="button"
                        onClick={goPrev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur shadow-md hover:scale-105 transform transition"
                        aria-label="Previous image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <button
                        type="button"
                        onClick={goNext}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur shadow-md hover:scale-105 transform transition"
                        aria-label="Next image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* subtle caption area (optional) */}
                      <div className="absolute left-0 right-0 bottom-0 p-3 bg-gradient-to-t from-black/40 via-transparent to-transparent text-white text-sm">
                        <div className="max-w-[85%] truncate">{`Image ${index + 1} of ${images.length}`}</div>
                      </div>
                    </div>

                    {/* pager dots */}
                    {showDots && (
                      <div className="flex items-center justify-center mt-3 space-x-2">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => { setIndex(i); resetTimer(); }}
                            className={`w-2.5 h-2.5 rounded-full transition-transform ${
                              i === index ? "scale-125" : "opacity-60"
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
