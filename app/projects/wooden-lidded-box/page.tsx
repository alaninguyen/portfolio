export const metadata = {
  title: "Wooden Lidded Box — Alani Nguyen",
  description: "PDES 2771 woodworking project with precise joinery and finishing.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <p className="text-xs uppercase tracking-widest opacity-60">Physical • PDES 2771</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold">Wooden Lidded Box</h1>
        <p className="mt-4 text-neutral-300">{/* TODO: summary: woods used, style, tolerances */}</p>
        <img src="/images/wooden-lidded-box/hero.jpg" alt="Wooden lidded box" className="mt-8 rounded-2xl border border-white/10" />
      </section>

      <section className="max-w-4xl mx-auto px-6 grid gap-10 pb-24">
        <div>
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="mt-2 text-neutral-300">{/* TODO */}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Process</h2>
          <ul className="mt-2 list-disc pl-5 space-y-2 text-neutral-300">
            <li>{/* TODO: milling, box joints/dovetails, tolerance control */}</li>
            <li>{/* TODO: lid fit, magnets/hinges, sanding grits */}</li>
            <li>{/* TODO: finish (oil/poly) & shop safety */}</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Outcome</h2>
          <p className="mt-2 text-neutral-300">{/* TODO: tolerance ±, finish quality, critique feedback */}</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <img src="/images/wooden-lidded-box/joint.jpg" className="rounded-2xl border border-white/10" alt="Joint" />
            <img src="/images/wooden-lidded-box/detail.jpg" className="rounded-2xl border border-white/10" alt="Detail" />
          </div>
        </div>
      </section>
    </main>
  );
}
