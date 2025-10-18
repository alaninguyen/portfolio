// components/Motion.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  className,
  y = 8,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
}) {
  const prefersReduced = useReducedMotion();
  const initial = prefersReduced ? undefined : { opacity: 0, y };
  const animate = prefersReduced ? undefined : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInSection({
  children,
  className,
  y = 12,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
}) {
  const prefersReduced = useReducedMotion();
  const initial = prefersReduced ? undefined : { opacity: 0, y };
  const animate = prefersReduced ? undefined : { opacity: 1, y: 0 };

  return (
    <motion.section
      initial={initial}
      animate={animate}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export const MotionA = motion.a;
