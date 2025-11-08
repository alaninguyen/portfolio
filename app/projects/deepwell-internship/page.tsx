import Image from "next/image";
import { FadeIn, FadeInSection } from "../../components/Motion";

export const metadata = {
  title: "DeepWell Skincare — Brand & Digital Design Internship",
  description:
    "Brand, email, and marketing design work created as a design intern for DeepWell Skincare, including investor pitch materials, Klaviyo email templates, and paid social creative.",
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
          Brand / UX • Internship
        </p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold">
          DeepWell Skincare — Brand & Digital Design
        </h1>
        <p className="mt-4 text-neutral-300 max-w-3xl">
          As a design intern at DeepWell Skincare, I worked across brand,
          digital, and marketing — creating investor materials, email templates,
          and paid social creative that supported a clean, science-backed
          skincare brand.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/deepwell-internship/hero.jpg"
            alt="DeepWell Skincare Power8 body serum bottles"
            width={1600}
            height={1200}
            priority
            className="w-full h-auto"
          />
        </div>
      </FadeIn>

      {/* Brand & product credibility */}
      <FadeInSection className="max-w-5xl mx-auto px-6 pb-10" y={12}>
        <h2 className="text-xl font-semibold">Brand & Product Story</h2>
        <p className="mt-3 text-neutral-300">
          DeepWell positions itself as a clean, research-driven skincare brand
          built on artesian electrolytes and transparent ingredients. A big part
          of my role was helping visually communicate that credibility —
          especially around the brand&apos;s 100/100 rating on Yuka and real
          customer transformations.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
            <Image
              src="/images/deepwell-internship/hero.jpg"
              alt="DeepWell Power8 bottles product shot"
              width={1200}
              height={900}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
            <Image
              src="/images/deepwell-internship/product-beforeafter.jpg"
              alt="Before and after results from using DeepWell skincare"
              width={1200}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>

        <p className="mt-4 text-neutral-300">
          I created and refined product-focused visuals like these to be used
          across email, social, and landing pages, keeping the tone honest and
          results-driven rather than overly cosmetic.
        </p>
      </FadeInSection>

      {/* Email & CRM design */}
      <FadeInSection className="max-w-5xl mx-auto px-6 pb-10" y={14}>
        <h2 className="text-xl font-semibold">Email Campaign & CRM Design</h2>
        <p className="mt-3 text-neutral-300">
          I designed responsive Klaviyo email templates for seasonal campaigns
          and product pushes, balancing strong hero imagery with clear copy
          hierarchy and modular product blocks that could be reused across
          campaigns.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
            <Image
              src="/images/deepwell-internship/email-summer.jpg"
              alt="DeepWell email campaign featuring summer skincare and 100/100 Yuka rating"
              width={1600}
              height={2000}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
            <Image
              src="/images/deepwell-internship/email-spring.jpg"
              alt="DeepWell spring reset email with tulip hero and product grid"
              width={1600}
              height={2000}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-4 rounded-2xl overflow-hidden border border-white/10 bg-white">
          <Image
            src="/images/deepwell-internship/email-footer.jpg"
            alt="DeepWell email footer with social links and brand details"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </div>

        <p className="mt-4 text-neutral-300">
          These templates were built to be easily edited by the team and reused
          for future promotions, while keeping typography, color, and product
          treatments consistent with the core brand.
        </p>
      </FadeInSection>

      {/* Pitch deck */}
      <FadeInSection className="max-w-5xl mx-auto px-6 pb-10" y={16}>
        <h2 className="text-xl font-semibold">Investor Pitch Deck</h2>
        <p className="mt-3 text-neutral-300">
          In addition to marketing touchpoints, I helped create a pitch deck
          used for SBA loan conversations. My focus was on visual clarity,
          story flow, and aligning the look and feel with the rest of the
          brand&apos;s digital presence.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
            <Image
              src="/images/deepwell-internship/pitchdeck-1.jpg"
              alt="DeepWell investor pitch deck slide"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
            <Image
              src="/images/deepwell-internship/pitchdeck-2.jpg"
              alt="DeepWell pitch deck slide showing brand or market story"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>

        <p className="mt-4 text-neutral-300">
          The deck ties together product benefits, brand positioning, and early
          traction in a way that feels cohesive with the marketing assets
          customers see.
        </p>
      </FadeInSection>

      {/* Paid ads */}
      <FadeInSection className="max-w-5xl mx-auto px-6 pb-24" y={18}>
        <h2 className="text-xl font-semibold">Paid Social Creative</h2>
        <p className="mt-3 text-neutral-300">
          I also supported performance marketing by designing creative for paid
          campaigns on Facebook and TikTok. My role included building static
          ad layouts, editing short-form video, and preparing assets for A/B
          tests focused on different hooks and benefit statements.
        </p>

        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-white">
          <Image
            src="/images/deepwell-internship/ad-facebook.jpg"
            alt="DeepWell Facebook ad creative highlighting product benefits"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </div>

        <p className="mt-4 text-neutral-300">
          Throughout the internship I worked closely with the founder to keep
          performance assets aligned with the brand system while still feeling
          bold enough to compete in crowded social feeds.
        </p>

        <p className="mt-4 text-neutral-300">
          Overall, this project strengthened my ability to move between brand
          design and execution — from investor-facing decks to the actual ads
          and emails that drive day-to-day sales.
        </p>
      </FadeInSection>
    </main>
  );
}
