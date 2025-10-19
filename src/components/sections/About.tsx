import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-gold-gradient">About</h2>
            <p className="mt-4 text-white/80 leading-7">
              I’m a Platform Engineer passionate about building premium, performant web
              experiences. I blend engineering rigor with refined design, focusing on scalable
              architectures, delightful micro‑interactions, and accessibility. I’ve delivered
              products across startups and enterprises, collaborating closely with designers and
              stakeholders to ship polished experiences that move metrics.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="glass-card rounded-2xl p-2 border inline-block">
              <Image
                src="/main.png"
                alt="Portrait"
                width={720}
                height={900}
                className="h-auto w-full rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


