import type { Project } from "@/types";

const sampleProjects: Project[] = [
  {
    id: "p1",
    title: "Luxury E‑commerce",
    description: "High-end storefront with animations and headless CMS.",
    image: "/projects/sample1.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    category: "Web",
  },
  {
    id: "p2",
    title: "Analytics Dashboard",
    description: "Realtime insights with charts and role-based access.",
    image: "/projects/sample2.jpg",
    technologies: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    category: "Web",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gold-gradient">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {sampleProjects.map((p) => (
            <article key={p.id} className="group glass-card glass-card-hover rounded-2xl overflow-hidden border">
              <div className="relative aspect-[16/9] overflow-hidden">
                {/* next/image later for perf */}
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-white/90">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-full text-[11px] bg-white/5 border border-white/10 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  {p.liveUrl && (
                    <a href={p.liveUrl} className="text-sm text-[color:var(--gold)] hover:underline">Live</a>
                  )}
                  {p.githubUrl && (
                    <a href={p.githubUrl} className="text-sm text-white/80 hover:underline">Code</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


