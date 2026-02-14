"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PUB_INFO } from "@/lib/data/hours";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

const heroImages = [
  "Pub exterior - sunny day with hanging baskets",
  "Interior bar area - warm lighting and character",
  "Beer garden - outdoor seating with greenery",
  "Atmospheric evening shot - cozy pub vibe",
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[500px] overflow-hidden bg-dark">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <ImagePlaceholder
            alt={heroImages[currentImage]}
            className="h-full w-full text-light/30"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-dark/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-heading text-5xl font-bold md:text-7xl"
        >
          {PUB_INFO.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-xl text-light/80 md:text-2xl"
        >
          Great Drinks, Great Atmosphere
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/drinks"
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-light"
          >
            View Drinks
          </Link>
          <Link
            href="/whats-on"
            className="rounded-lg border-2 border-secondary px-6 py-3 font-semibold text-secondary transition-colors hover:bg-secondary hover:text-dark"
          >
            What&apos;s On
          </Link>
        </motion.div>
      </div>

      {/* Info bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-dark/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-3 text-sm text-light/70">
          <span>The Red Cross</span>
          <span className="hidden text-light/30 sm:inline">|</span>
          <span>Reigate, Surrey</span>
        </div>
      </div>
    </section>
  );
}
