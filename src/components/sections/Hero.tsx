"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import VideoBackground from "@/components/VideoBackground";
import Particles from "@/components/magicui/Particles";
import Magnetic from "@/components/magicui/Magnetic";

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100svh] flex items-center">
      <VideoBackground />
      <Particles />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="absolute right-4 sm:right-8 top-24 sm:top-32 opacity-80">
            {/* Decorative emblem on the right side */}
            {/* Using img to avoid Next Image layout constraints for now */}
            <img src="/logo.png" alt="Emblem" className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto" />
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl glass-card glass-card-hover rounded-2xl p-8 border"
          >
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-widest text-white/60">
              {PERSONAL_INFO.tagline}
            </motion.p>
            <motion.h1
              variants={scaleIn}
              className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold text-gold-gradient font-[family-name:var(--font-playfair)]"
            >
              {PERSONAL_INFO.name}
            </motion.h1>
            <motion.h2 variants={fadeInUp} className="mt-2 text-xl sm:text-2xl text-white/80">
              {PERSONAL_INFO.title}
            </motion.h2>
            <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-3">
              <Magnetic>
                <a href="#projects" className="px-5 py-2.5 rounded-full bg-[color:var(--gold)] text-black font-medium shadow">
                  {PERSONAL_INFO.cta[0]}
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#contact" className="px-5 py-2.5 rounded-full border border-[color:var(--gold)] text-white/90 hover:bg-white/5 transition-colors">
                  {PERSONAL_INFO.cta[1]}
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-8 text-white/70"
            aria-hidden
          >
            <span className="block text-xs">Scroll</span>
            <span className="block h-6 w-px bg-white/40 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


