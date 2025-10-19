export default function VideoBackground() {
  return (
    <div className="relative h-screen w-full overflow-hidden" aria-hidden>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 overlay-dark-70" />
    </div>
  );
}


