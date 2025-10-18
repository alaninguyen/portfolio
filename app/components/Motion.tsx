"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";

export function FadeIn({
  as: Tag = "div",
  children,
  className,
  y = 8,
  delay = 0,
}: {
  as?: any;
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
}) {
  const prefersReduced = useReducedMotion();
  const initial = prefersReduced ? {} : { opacity: 0, y };
  const animate = prefersReduced ? {} : { opacity: 1, y: 0 };

  return (
    <motion.div
      as={Tag}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const MotionA = motion.a;
export const MotionDiv = motion.div;
