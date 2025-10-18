// app/about/page.tsx
export const metadata = {
  title: "About: Alani Nguyen",
  description:
    "Product designer with a UX minor at the University of Minnesota — blending physical craft, digital precision, and aesthetic clarity.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-3xl md:text-5xl font-bold">About</h1>

        <p className="mt-6 text-neutral-300 leading-relaxed">
          I’m <span className="text-white font-medium">Alani Nguyen</span> — a Product Design major and UX minor at the
          University of Minnesota. I think in systems, but I design through intuition. My work spans tangible builds and
          digital experiences, unified by a focus on form, clarity, and emotional precision. Whether it’s TIG welding a
          shift knob, shaping a wooden box, or structuring a UX flow, my goal is always to make something feel inevitable
          — as if it could exist no other way.
        </p>

        <p className="mt-6 text-neutral-300 leading-relaxed">
          I’m drawn to the tension between technical and aesthetic — engineering a joint to a millimeter tolerance,
          then composing a layout that breathes. Design, to me, is equal parts logic and sensitivity; a rhythm of
          control and release. That balance defines everything I make, from physical prototypes to digital systems.
        </p>

        <p className="mt-6 text-neutral-300 leading-relaxed">
          My approach is research-backed, detail-obsessed, and quietly expressive. I believe that design doesn’t need to
          shout to make an impact — it needs to resonate. I build with intention, I iterate relentlessly, and I care about
          how things feel in the hand, on screen, and in memory.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-white">Focus</h2>
            <ul className="mt-3 space-y-2 text-neutral-300 list-disc pl-5">
              <li>Product Design & CMF Exploration</li>
              <li>UX Research & Information Architecture</li>
              <li>Prototyping & Physical Modelmaking</li>
              <li>Brand & Interface Systems</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Tools</h2>
            <ul className="mt-3 space-y-2 text-neutral-300 list-disc pl-5">
              <li>Figma / Adobe CC / KeyShot</li>
              <li>SolidWorks / xDesign</li>
              <li>HTML, CSS, React (Next.js + Tailwind)</li>
              <li>TIG Welding, Shop Fabrication</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/Alani-Nguyen-Resume.pdf"
            className="rounded-2xl border border-white/20 hover:border-white/50 px-5 py-2 transition"
          >
            Download Resume
          </a>
        </div>
      </section>
    </main>
  );
}
