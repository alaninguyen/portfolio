// app/page.tsx
import { FadeIn, FadeInSection, MotionA } from "./components/Motion";


export default function Home() {
  const projects = [
  {
    title: "RSTuning Website",
    tag: "Web • GDES 2342",
    href: "/projects/rs-tuning",
    img: "/images/rs-tuning/rst-desktop-home.jpg",
  },
  {
    title: "Cardboard Chair",
    tag: "Physical • PDES 2771",
    href: "/projects/cardboard-chair",
    img: "/images/cardboard-chair/hero.jpg",
  },
  {
    title: "Wooden Lidded Box",
    tag: "Physical • PDES 2771",
    href: "/projects/wooden-lidded-box",
    img: "/images/wooden-lidded-box/hero.jpg",
  },
  {
    title: "Look-Alike Model",
    tag: "Modeling • PDES 2777",
    href: "/projects/look-alike-model",
    img: "/images/look-alike-model/hero.jpg",
  },
  {
    title: "DeepWell Skincare Internship",
    tag: "Brand/UX • Internship",
    href: "/projects/deepwell-internship",
    img: "/images/deepwell-internship/hero.jpg",
  },
   {
    title: "Material Rendering Sketches",
    tag: "Sketching • Multi-material",
    href: "/projects/material-rendering",
    img: "/images/material-rendering/hero.jpg",
  },
];
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <FadeInSection className="max-w-6xl mx-auto px-6 pt-28 pb-14">
        <p className="text-sm uppercase tracking-[0.3em] opacity-60">Portfolio</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold">
          Alani Nguyen — Product Designer <span className="opacity-60">/ UX minor</span>
        </h1>
        <p className="mt-5 max-w-2xl text-neutral-300">
          Product + UX designer focused on clean aesthetics, automotive craft, and research-backed execution.
          Case studies span physical builds, brand systems, and web UX.
        </p>
        <div className="mt-8 flex gap-3">
          <a
            href="/Alani-Nguyen-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border px-4 py-2 transition hover:border-white/60"
          >
            Resume
          </a>
          <a
            href="mailto:Alaninguyen27@gmail.com"
            className="rounded-2xl bg-white text-black px-4 py-2 transition hover:brightness-95 active:scale-[0.98]"
          >
            Contact
          </a>
        </div>
      </FadeInSection>

      {/* Grid */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 pb-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p, i) => (
          <FadeIn key={p.href} y={16} delay={i * 0.04}>
            <MotionA
              href={p.href}
              className="group rounded-2xl overflow-hidden border border-white/10 transition hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 block"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
            >
              <div
                className="aspect-[4/3] bg-white/5"
                style={{
                  backgroundImage: `url(${p.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="p-4">
                <p className="text-xs uppercase tracking-widest opacity-60">
                  {p.tag}
                </p>
                <h3 className="mt-1 text-lg font-medium group-hover:underline">
                  {p.title}
                </h3>
              </div>
            </MotionA>
          </FadeIn>
        ))}
      </section>
    </main>
  );
}
