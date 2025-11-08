import Image from "next/image";
import { FadeIn, FadeInSection } from "../../components/motion";

export const metadata = {
  title: "Wooden Lidded Box — Model Making",
  description:
    "Handmade hardwood lidded box. From sketch and jigs to precision joinery, finishing, and critique-ready presentation.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <FadeIn as="section" className="max-w-4xl mx-auto px-6 pt-24 pb-12" y={12}>
        <p className="text-xs uppercase tracking-widest opacity-60">
          Physical • PDES 2771
        </p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold">
          Wooden Lidded Box
        </h1>
        <p className="mt-4 text-neutral-300">
          Precision model-making exercise in planning, jig building, milling, and finishing.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/wooden-lidded-box/hero.jpg"
            alt="Finished lidded box hero"
            width={1600}
            height={1200}
            priority
            className="w-full h-auto"
          />
        </div>
      </FadeIn>

      {/* Meta */}
      <FadeInSection className="max-w-4xl mx-auto px-6 grid sm:grid-cols-2 gap-6 pb-10">
        <div className="space-y-2">
          <h2 className="text-sm uppercase tracking-widest opacity-60">Role</h2>
          <p className="text-neutral-300">Design, milling, joinery, finishing</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm uppercase tracking-widest opacity-60">Course / Time</h2>
          <p className="text-neutral-300">PDES 2771 • 2 weeks</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm uppercase tracking-widest opacity-60">Materials</h2>
          <p className="text-neutral-300">Hardwood (poplar), glue, finish (stain)</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm uppercase tracking-widest opacity-60">Tools</h2>
          <p className="text-neutral-300">Table saw, router table, chisel set, sanding blocks, clamps</p>
        </div>
      </FadeInSection>

      {/* Problem / Goals */}
      <FadeInSection className="max-w-4xl mx-auto px-6 pb-8" y={14}>
        <h2 className="text-xl font-semibold">Goals</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-neutral-300">
          <li>Design a compact hardwood box with a clean, press-fit lid.</li>
          <li>Use new machienery in FAB shop, practice precise milling, repeatability via jigs, and consistent tolerances.</li>
          <li>Deliver critique-ready surfaces and edges with a durable finish.</li>
        </ul>
      </FadeInSection>

      {/* Process */}
      <FadeInSection className="max-w-4xl mx-auto px-6 pb-10" y={16}>
        <h2 className="text-xl font-semibold">Process</h2>
        <ol className="mt-3 list-decimal pl-5 space-y-3 text-neutral-300">
          <li><strong>Sketch & dimensions:</strong> overall size, wall thickness, lid clearance.</li>
          <li><strong>Jig setup:</strong> stop-blocks for identical sides; router fence for grooves/rabbets.</li>
          <li><strong>Milling & joinery:</strong> crosscut to length, cut grooves/rabbets, meiter and dado joinery, dry fit.</li>
          <li><strong>Lid fit:</strong> sneak up on tolerance for a smooth fit (no rattle).</li>
          <li><strong>Surface prep:</strong> progressive sanding, break edges, grain match, glue-up.</li>
          <li><strong>Finish:</strong> pre-stain conditioner, stain, wax, buff, final photograph + critique.</li>
        </ol>

        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/wooden-lidded-box/process-1.jpg"
              alt="Milling / jig setup"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/wooden-lidded-box/process-2.jpg"
              alt="Dry fit and tolerance checks"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/wooden-lidded-box/process-3.jpg"
              alt="Finish and detailing"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </FadeInSection>

      {/* Outcome */}
      <FadeInSection className="max-w-4xl mx-auto px-6 pb-24" y={18}>
        <h2 className="text-xl font-semibold">Outcome</h2>
        <p className="mt-3 text-neutral-300">
          Consistent joints, tight lid tolerance, and a clean satin finish.
          Lidded box contains 3 sections to orgainze trinkets and mail, as well as a section to hold napkins.
        </p>

        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/images/wooden-lidded-box/detail.jpg"
            alt="Detail of joinery and finish"
            width={1600}
            height={1200}
            className="w-full h-auto"
          />
        </div>
      </FadeInSection>
    </main>
  );
}
