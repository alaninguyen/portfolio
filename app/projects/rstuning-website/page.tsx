// app/projects/rstuning-website/page.tsx
export const metadata = {
  title: "RSTuning Website — Alani Nguyen",
  description: "Website design project from GDes 2342.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <p className="text-xs uppercase tracking-widest opacity-60">Web • GDes 2342</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold">RSTuning Website</h1>
        <p className="mt-4 text-neutral-300">
          {/* TODO: 1–2 sentence summary of the site and your role (IA, visual system, UX flows). */}
        </p>
        <img src="/images/rstuning-website/hero.jpg" alt="RSTuning website mockups" className="mt-8 rounded-2xl border border-white/10" />
      </section>

      <section className="max-w-4xl mx-auto px-6 grid gap-10 pb-24">
        <div>
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="mt-2 text-neutral-300">
            {/* TODO: What wasn’t working for users? (e.g., confusing nav, no clear mod categories, poor mobile.) */}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Process</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-neutral-300">
            <li>{/* TODO: research: sitemap + card sort + competitor scan */}</li>
            <li>{/* TODO: wireframes: home, categories, PDP, checkout hint */}</li>
            <li>{/* TODO: design system: type scale, color, components */}</li>
            <li>{/* TODO: hi-fi mockups + prototype + 3–5 usability tests */}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Outcome</h2>
          <p className="mt-2 text-neutral-300">
            {/* TODO: measurable wins if possible (task time ↓, success rate ↑, bounce ↓). */}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <img src="/images/rstuning-website/home.jpg" className="rounded-2xl border border-white/10" alt="Home" />
            <img src="/images/rstuning-website/category.jpg" className="rounded-2xl border border-white/10" alt="Category" />
          </div>
        </div>
      </section>
    </main>
  );
}
