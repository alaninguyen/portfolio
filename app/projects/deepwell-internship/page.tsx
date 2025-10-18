export const metadata = {
  title: "DeepWell Skincare — Internship Work",
  description: "Brand, email templates, and UX/design deliverables.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <p className="text-xs uppercase tracking-widest opacity-60">Internship • Brand/UX</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold">DeepWell Skincare — Internship</h1>
        <p className="mt-4 text-neutral-300">
          {/* TODO: summarize scope — visual system, email templates, social assets, UX flows. */}
        </p>
        <img src="/images/deepwell-internship/hero.jpg" alt="DeepWell hero" className="mt-8 rounded-2xl border border-white/10" />
      </section>

      <section className="max-w-4xl mx-auto px-6 grid gap-10 pb-24">
        <div>
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="mt-2 text-neutral-300">{/* TODO */}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Process</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-neutral-300">
            <li>{/* TODO: brand system (type, color, components) */}</li>
            <li>{/* TODO: email templates (Figma → HTML), deliverability */}</li>
            <li>{/* TODO: landing UX or checkout tweaks */}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Outcome</h2>
          <p className="mt-2 text-neutral-300">
            {/* TODO: metrics if available (CTR, signup rate, consistency), or qualitative wins. */}
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            <img src="/images/deepwell-internship/email-1.jpg" className="rounded-2xl border border-white/10" alt="Email 1" />
            <img src="/images/deepwell-internship/email-2.jpg" className="rounded-2xl border border-white/10" alt="Email 2" />
            <img src="/images/deepwell-internship/brand.jpg" className="rounded-2xl border border-white/10" alt="Brand" />
          </div>
        </div>
      </section>
    </main>
  );
}
