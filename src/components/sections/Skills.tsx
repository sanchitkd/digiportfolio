import { SKILL_CATEGORIES } from "@/lib/constants";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gold-gradient">Skills</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SKILL_CATEGORIES).map(([category, skills]) => (
            <div key={category} className="glass-card glass-card-hover rounded-2xl p-6 border">
              <h3 className="text-lg font-medium text-white/90">{category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/80">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


