"use client";

import { useRef } from "react";

export default function Magnetic({ children, strength = 0.2 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `translate(0, 0)`;
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="transition-transform will-change-transform">
      {children}
    </div>
  );
}


