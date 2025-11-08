import Image from "next/image";
import { FadeIn, FadeInSection } from "../../components/motion";

export const metadata = {
  title: "RS Tuning — Interaction & Interface Design",
  description:
    "Responsive e-commerce experience for performance car parts, designed in Figma and coded in HTML/CSS as part of an interaction design course.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <FadeIn
        as="section"
        className="max-w-5xl mx-auto px-6 pt-24 pb-12"
        y={12}
      >
        <p className="text-xs uppercase tracking-widest opacity-60">
          Digital • Interaction Design
        </p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold">
          RS Tuning — Performance Parts E-commerce
        </h1>
        <p className="mt-4 text-neutral-300 max-w-3xl">
          A desktop and mobile e-commerce experience for an Audi RS–focused
          performance shop. I designed the flows in Figma and hand-coded the
          desktop site in HTML/CSS, balancing motorsport energy with a clear,
          shoppable interface.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/rs-tuning/rst-desktop-home.jpg"
            alt="RS Tuning desktop homepage with Audi RS wagons hero image and popular categories"
            width={1920}
            height={1080}
            priority
            className="w-full h-auto"
          />
        </div>
      </FadeIn>

      {/* Context */}
      <FadeInSection className="max-w-5xl mx-auto px-6 pb-8" y={12}>
        <h2 className="text-xl font-semibold">Project Context</h2>
        <p className="mt-3 text-neutral-300">
          For an interaction design course in my UX minor, we were asked to
          design an end-to-end shopping experience for a specific audience. I
          focused on RS Tuning, a concept brand that specializes in Audi RS
          performance parts. My goals were to highlight enthusiast-level parts
          like turbo kits and suspension while keeping the experience simple for
          people who just want to find parts that fit their car.
        </p>
        <p className="mt-3 text-neutral-300">
          The deliverables included responsive Figma flows (desktop and mobile),
          a component-based design system, and a coded desktop prototype built
          in VS Code using semantic HTML and CSS.
        </p>
      </FadeInSection>

      {/* Wireframes & structure */}
      <FadeInSection className="max-w-5xl mx-auto px-6 pb-10" y={14}>
        <h2 className="text-xl font-semibold">Information Architecture</h2>
        <p className="mt-3 text-neutral-300">
          I started with low-fidelity wireframes to define the core structure:
          a hero that highlights RS models, a “shop by category” grid for quick
          scanning, and flows for searching by part or by car. From there I
          built mid-fidelity wireframes for key screens including home, product
          listing, product detail, cart, and checkout.
        </p>

        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/images/rs-tuning/rst-desktop-wireframe.jpg"
            alt="Desktop wireframes for RS Tuning home, categories, and product detail pages"
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
      </FadeInSection>

      {/* Visual design system */}
      <FadeInSection className="max-w-5xl mx-auto px-6 pb-10" y={16}>
        <h2 className="text-xl font-semibold">Visual Language</h2>
        <p className="mt-3 text-neutral-300">
          The visual system pulls from motorsport and German performance cues:
          RS red, desaturated neutrals, and a muted sand accent for cards and
          panels. I paired a strong display type for headings with a clean
          sans-serif body font, and used consistent card shapes for categories,
          DIY articles, and product tiles.
        </p>

        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/images/rs-tuning/rst-color-system.jpg"
            alt="RS Tuning color and typography system used across the e-commerce experience"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </FadeInSection>

      {/* Desktop flows */}
      <FadeInSection className="max-w-5xl mx-auto px-6 pb-10" y={18}>
        <h2 className="text-xl font-semibold">Desktop Experience</h2>
        <p className="mt-3 text-neutral-300">
          On desktop, the homepage centers the RS wagon hero image and guides
          users into popular categories like exhaust, suspension, and engine
          upgrades. A DIY help section surfaces editorial content such as
          lowering-spring installs and turbo swaps, supporting enthusiasts who
          want to wrench on their own cars.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/rs-tuning/rst-desktop-home.jpg"
              alt="RS Tuning desktop homepage with hero image and category grid"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/rs-tuning/rst-desktop-diy.jpg"
              alt="RS Tuning desktop DIY help page with trending RS3 articles"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
        </div>

        <p className="mt-4 text-neutral-300">
          I coded the desktop layouts in VS Code, paying attention to semantic
          structure, reusable CSS components, and consistent spacing so the live
          prototype matched the Figma designs.
        </p>
      </FadeInSection>

      {/* Mobile flows */}
      <FadeInSection className="max-w-5xl mx-auto px-6 pb-24" y={20}>
        <h2 className="text-xl font-semibold">Mobile Shopping Flow</h2>
        <p className="mt-3 text-neutral-300">
          For mobile, I redesigned the layout to prioritize quick scanning and
          one-hand use. A persistent bottom nav gives access to home, search,
          DIY content, garage, and cart. The product detail page highlights
          fitment, price, and imagery first, with specs and long-form copy
          lower on the page.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/rs-tuning/rst-mobile-home.jpg"
              alt="RS Tuning mobile home screen with hero, categories, and trending content"
              width={900}
              height={1800}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/rs-tuning/rst-mobile-product.jpg"
              alt="Mobile product detail screen for IMS full frame turbo kit"
              width={900}
              height={1800}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/rs-tuning/rst-mobile-confirmation.jpg"
              alt="Mobile order confirmation and suggested products screen"
              width={900}
              height={1800}
              className="w-full h-auto"
            />
          </div>
        </div>

        <p className="mt-4 text-neutral-300">
          The full flow takes users from browsing turbo kits and suspension to
          checkout and order confirmation, with upsell moments and clear status
          feedback along the way.
        </p>
      </FadeInSection>
    </main>
  );
}
