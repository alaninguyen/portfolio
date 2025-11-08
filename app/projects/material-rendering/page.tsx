import Image from "next/image";
import { FadeIn, FadeInSection } from "../../components/motion";

export const metadata = {
  title: "Material Rendering Sketches — Transparency & Mixed Surfaces",
  description:
    "Marker and pencil renderings exploring transparent glass, hemp bioplastic, wood, metal, chrome, and plastics through product sketching.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <FadeIn
        as="section"
        className="max-w-4xl mx-auto px-6 pt-24 pb-12"
        y={12}
      >
        <p className="text-xs uppercase tracking-widest opacity-60">
          Sketching • Material Rendering
        </p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold">
          Material Rendering Sketches
        </h1>
        <p className="mt-4 text-neutral-300">
          A sketching assignment focused on rendering multiple materials —
          including glass, hemp bioplastic, wood, metal, chrome, and plastic —
          while maintaining believable form, light, and shadow.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white">
          <Image
            src="/images/material-rendering/hero.jpg"
            alt="Mixed material rendering sketches of a glass bottle and diving helmet"
            width={1600}
            height={1200}
            priority
            className="w-full h-auto"
          />
        </div>
      </FadeIn>

      {/* Project context */}
      <FadeInSection className="max-w-4xl mx-auto px-6 pb-8" y={12}>
        <h2 className="text-xl font-semibold">Project Brief</h2>
        <p className="mt-3 text-neutral-300">
          The goal of this assignment was to practice rendering different
          materials in marker and pencil while still communicating clear product
          form. We were asked to develop two concepts: one that included
          transparency and one that was worn on the head, each with ideation
          sketches and a final, more refined rendering sheet.
        </p>
        <p className="mt-3 text-neutral-300">
          I chose a glass water bottle with a protective hemp plastic sleeve for
          the transparency concept, and a commercial diving helmet for the
          head-worn concept, both designed to push me to handle complex
          reflections and layered materials.
        </p>
      </FadeInSection>

      {/* Glass bottle concept */}
      <FadeInSection className="max-w-4xl mx-auto px-6 pb-10" y={14}>
        <h2 className="text-xl font-semibold">Glass Bottle with Hemp Sleeve</h2>
        <p className="mt-3 text-neutral-300">
          For the transparency-focused concept, I explored a glass water bottle
          wrapped in a hemp-based plastic sleeve with cutouts that reveal the
          glass. A wooden cap adds warmth and contrast. The challenge was
          showing how light passes through the glass, catches on the sleeve
          edges, and softens through the liquid inside.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
            <Image
              src="/images/material-rendering/bottle-ideation.jpg"
              alt="Ideation sketches for glass water bottle with hemp plastic sleeve and wood cap"
              width={1200}
              height={900}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
            <Image
              src="/images/material-rendering/bottle-render.jpg"
              alt="Final rendering of the glass bottle concept showing transparency and materials"
              width={1200}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>

        <p className="mt-4 text-neutral-300">
          In the final sheet, I emphasized edge highlights, cast shadows, and
          subtle value shifts to separate the glass, liquid, hemp sleeve, and
          wood without over-outlining the form.
        </p>
      </FadeInSection>

      {/* Diving helmet concept */}
      <FadeInSection className="max-w-4xl mx-auto px-6 pb-24" y={16}>
        <h2 className="text-xl font-semibold">Commercial Diving Helmet</h2>
        <p className="mt-3 text-neutral-300">
          The head-worn concept is a commercial diving helmet that combines
          painted metal, chrome accents, colored and black plastics, and glass
          viewports. This subject forced me to think about how different
          finishes on the same object react to the same light source.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
            <Image
              src="/images/material-rendering/helmet-ideation.jpg"
              alt="Ideation sketches for commercial diving helmet exploring form and materials"
              width={1200}
              height={900}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
            <Image
              src="/images/material-rendering/helmet-render.jpg"
              alt="Final rendering of commercial diving helmet with metal, chrome, plastics, and glass"
              width={1200}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>

        <p className="mt-4 text-neutral-300">
          I used sharper highlights and higher contrast on chrome and glass,
          while keeping the painted metal more matte and controlled. The result
          is a set of sketches that read as a cohesive object but clearly
          communicate different materials.
        </p>
      </FadeInSection>
    </main>
  );
}
