import Image from "next/image";
import { FadeIn, FadeInSection } from "../../components/motion";

export const metadata = {
  title: "Cardboard Lounge Chair — Model Making",
  description:
    "Exploring cardboard joinery, structural strength, and comfort through iterative modeling and full-scale prototyping.",
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
          Cardboard Lounge Chair
        </h1>
        <p className="mt-4 text-neutral-300">
          A lounge-style chair designed and constructed entirely from cardboard — exploring new ways to strengthen, join, and shape a compressible material.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/cardboard-chair/hero.jpg"
            alt="Final cardboard chair"
            width={1600}
            height={1200}
            priority
            className="w-full h-auto"
          />
        </div>
      </FadeIn>

      {/* Context */}
      <FadeInSection className="max-w-4xl mx-auto px-6 pb-8" y={12}>
        <h2 className="text-xl font-semibold">Project Context</h2>
        <p className="mt-3 text-neutral-300">
          This project challenged us to use cardboard as the sole structural and aesthetic material.
          The chair needed to support a person’s weight for at least 30 minutes. My goal was to achieve both strength and comfort by experimenting with multiple scales and construction methods.
        </p>
      </FadeInSection>

      {/* Ideation & Moldboard */}
      <FadeInSection className="max-w-4xl mx-auto px-6 pb-8" y={14}>
        <h2 className="text-xl font-semibold">Ideation</h2>
        <p className="mt-3 text-neutral-300">
          I explored a lounge-style form that encourages relaxation — reclining posture, leg support, and layered structure.
          My moldboard guided the direction: a balance between organic curves and industrial folds.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/cardboard-chair/moldboard.jpg"
              alt="Moodboard / inspiration"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/cardboard-chair/sketches.jpg"
              alt="Concept sketches"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </FadeInSection>

      {/* Prototyping */}
      <FadeInSection className="max-w-4xl mx-auto px-6 pb-10" y={16}>
        <h2 className="text-xl font-semibold">Prototyping</h2>
        <p className="mt-3 text-neutral-300">
          To refine form and structure, I built three 1/6 scale models to test different joint geometries, then a 1/3 scale prototype for proportion and load.
          Each iteration improved rigidity and comfort, leading to a full-scale version capable of holding my weight for over two hours.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          <Image
            src="/images/cardboard-chair/models-1.jpg"
            alt="Small scale models"
            width={800}
            height={600}
            className="rounded-2xl border border-white/10 w-full h-auto"
          />
          <Image
            src="/images/cardboard-chair/models-2.jpg"
            alt="Mid-scale prototype"
            width={800}
            height={600}
            className="rounded-2xl border border-white/10 w-full h-auto"
          />
          <Image
            src="/images/cardboard-chair/joinery-detail.jpg"
            alt="Joinery detail"
            width={800}
            height={600}
            className="rounded-2xl border border-white/10 w-full h-auto"
          />
        </div>
      </FadeInSection>

      {/* Outcome */}
      <FadeInSection className="max-w-4xl mx-auto px-6 pb-24" y={18}>
        <h2 className="text-xl font-semibold">Outcome</h2>
        <p className="mt-3 text-neutral-300">
          The final chair achieved structural stability, ergonomic comfort, and aesthetic coherence — combining layered corrugation and locked-tab joints to resist bending.
          It supported my weight for over two hours without deformation.
        </p>
        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/images/cardboard-chair/final-chair.jpg"
            alt="Final cardboard lounge chair"
            width={1600}
            height={1200}
            className="w-full h-auto"
          />
        </div>
      </FadeInSection>
    </main>
  );
}
