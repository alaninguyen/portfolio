"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";

/** Polymorphic FadeIn with optional "as" element (div by default) */
type FadeInProps<E extends ElementType> = {
  as?: E;
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
} & Omit<ComponentPropsWithoutRef<E>, "as" | "children" | "className">;

export function FadeIn<E extends ElementType = "div">({
  as,
  children,
  className,
  y = 8,
  delay = 0,
  ...rest
}: FadeInProps<E>) {
  const prefersReduced = useReducedMotion();

  const initial = prefersReduced ? undefined : { opacity: 0, y };
  const animate = prefersReduced ? undefined : { opacity: 1, y: 0 };

  const Tag = (as ?? "div") as ElementType;
  const MotionTag = motion(Tag);

  return (
    <MotionTag
      initial={initial}
      animate={animate}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
      {...(rest as object)}
    >
      {children}
    </MotionTag>
  );
}

/** Convenience wrapper that defaults to <section> */
export function FadeInSection({
  children,
  className,
  y = 12,
  delay = 0,
  ...rest
}: Omit<FadeInProps<"section">, "as">) {
  return (
    <FadeIn as="section" className={className} y={y} delay={delay} {...rest}>
      {children}
    </FadeIn>
  );
}

export const MotionA = motion.a;
