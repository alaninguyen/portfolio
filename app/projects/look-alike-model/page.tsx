import Image from "next/image";
import { FadeIn, FadeInSection } from "../../components/motion";

export const metadata = {
  title: "Look-Alike Model — Glass Skincare Bottle",
  description:
    "A high-fidelity look-alike model of a glass skincare spray bottle, built in HDU foam with an emphasis on proportion, surface quality, and reflective form.",
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
          Physical • PDES 27XX
        </p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold">
          Look-Alike Model — Glass Skincare Bottle
        </h1>
        <p className="mt-4 text-neutral-300">
          A hand-built look-alike model of a glass skincare spray bottle,
          focusing on accurate proportion, tight profile control, and a
          high-gloss finish that reads like glass.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/look-alike-model/hero.jpg"
            alt="Final look-alike model of a glass skincare bottle"
            width={1600}
            height={1200}
            priority
            className="w-full h-auto"
          />
        </div>
      </FadeIn>

      {/* Project context */}
      <FadeInSection className="max-w-4xl mx-auto px-6 pb-8" y={12}>
        <h2 className="text-xl font-semibold">Project Context</h2>
        <p className="mt-3 text-neutral-300">
          The brief was to select an existing product and recreate it as a
          look-alike model. I chose a glass skincare spray bottle because its
          form is simple at first glance, but actually relies on subtle changes
          in curvature, shoulder transitions, and reflection to feel convincing.
        </p>
        <p className="mt-3 text-neutral-300">
          The final model needed to read as the original object from primary
          viewing angles while also holding up in close-up inspection and
          controlled lighting.
        </p>
      </FadeInSection>

      {/* Reference & planning */}
      <FadeInSection className="max-w-4xl mx-auto px-6 pb-8" y={14}>
        <h2 className="text-xl font-semibold">Reference & Planning</h2>
        <p className="mt-3 text-neutral-300">
          I began by documenting the bottle with photography and measuring key
          diameters, heights, and radii. Using those measurements, I created
          orthographic sketches to translate the 3D form into clean profiles and
          sections that would guide the build. The sketches were intentionally
          rough, but they gave me a clear roadmap for proportion and major
          break lines.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/look-alike-model/reference.jpg"
              alt="Reference glass skincare spray bottle"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/look-alike-model/xps-prototype.jpg"
              alt="XPS foam iteration used to study the bottle's form"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>

        <p className="mt-4 text-neutral-300">
          Before committing to the final material, I built an initial iteration
          in XPS foam. This allowed me to quickly test the overall stance,
          shoulder angle, and nozzle proportion without worrying about surface
          quality yet.
        </p>
      </FadeInSection>

      {/* Turning & shaping */}
      <FadeInSection className="max-w-4xl mx-auto px-6 pb-10" y={16}>
        <h2 className="text-xl font-semibold">Turning & Shaping</h2>
        <p className="mt-3 text-neutral-300">
          The final model was carved from HDU foam. I used the lathe to spin the
          bottle and establish the main diameters and profiles, constantly
          checking against the orthographic measurements and the real bottle.
          Once the overall volume was accurate, I refined transitions by hand
          to maintain clean silhouettes from multiple views.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          <Image
            src="/images/look-alike-model/lathe-process.jpg"
            alt="HDU bottle blank being turned on the lathe"
            width={800}
            height={600}
            className="rounded-2xl border border-white/10 w-full h-auto"
          />
          <Image
            src="/images/look-alike-model/sanding-progress.jpg"
            alt="Progress shots while sanding and refining the bottle form"
            width={800}
            height={600}
            className="rounded-2xl border border-white/10 w-full h-auto"
          />
          <Image
            src="/images/look-alike-model/bottle-detail.jpg"
            alt="Detail view of the refined shoulder and neck geometry"
            width={800}
            height={600}
            className="rounded-2xl border border-white/10 w-full h-auto"
          />
        </div>

        <p className="mt-4 text-neutral-300">
          The majority of the project time went into sanding. I moved through
          progressively finer grits to remove tool marks and flatten micro
          ridges so that the surface would reflect light like glass instead of
          foam.
        </p>
      </FadeInSection>

      {/* Outcome */}
      <FadeInSection className="max-w-4xl mx-auto px-6 pb-24" y={18}>
        <h2 className="text-xl font-semibold">Outcome</h2>
        <p className="mt-3 text-neutral-300">
          The finished HDU model reads as a glass skincare bottle, capturing the
          original object&apos;s proportion, stance, and highlight behavior.
          Under directional lighting, the smooth surface and controlled radii
          create clean reflections that reinforce the illusion of glass.
        </p>
        <p className="mt-3 text-neutral-300">
          Through this project I became more sensitive to small shifts in
          curvature and how much sanding and surface prep impact the perceived
          quality of a product.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/look-alike-model/final-front.jpg"
              alt="Final look-alike model of the skincare bottle, front view"
              width={1200}
              height={900}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/look-alike-model/final-angle.jpg"
              alt="Final look-alike model at an angle under directional lighting"
              width={1200}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      </FadeInSection>
    </main>
  );
}
