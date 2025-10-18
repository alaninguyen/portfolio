export const metadata = {
  title: "Look-Alike Model — Alani Nguyen",
  description: "PDES 2777 high-fidelity model replicating form and finish.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <p className="text-xs uppercase tracking-widest opacity-60">Modeling • PDES 2777</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold">Look-Alike Model</h1>
        <p className="mt-4 text-neutral-300">{/* TODO: subject you replicated, materials, finishes */}</p>
        <img src="/images/look-alike-model/hero.jpg" alt="Look-alike model" className="mt-8 rounded-2xl border border-white/10" />
      </section>

      <section className="max-w-4xl mx-auto px-6 grid gap-10 pb-24">
        <div>
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="mt-2 text-neutral-300">{/* TODO */}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Process</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-neutral-300">
            <li>{/* TODO: measurement, templates, rough to finish shaping */}</li>
            <li>{/* TODO: surfacing/primer cycles, paint system */}</li>
            <li>{/* TODO: decals, clear coat, presentation */}</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Outcome</h2>
          <p className="mt-2 text-neutral-300">{/* TODO: fidelity score/feedback, photo setup */}</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <img src="/images/look-alike-model/process.jpg" className="rounded-2xl border border-white/10" alt="Process" />
            <img src="/images/look-alike-model/detail.jpg" className="rounded-2xl border border-white/10" alt="Detail" />
          </div>
        </div>
      </section>
    </main>
  );
}
