export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--gold)]/20 bg-[color:var(--dark-900)]/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/60">© {new Date().getFullYear()} Sanchit Dikshit. All rights reserved.</p>
        <a href="#hero" className="text-xs text-white/80 hover:text-white transition-colors">Back to top ↑</a>
      </div>
    </footer>
  );
}


