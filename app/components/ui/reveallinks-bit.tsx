"use client";

import React from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <section className="grid h-full w-full place-content-center bg-transparent px-2 py-4">
      <FlipLink target="_blank" href="https://github.com/walid-idrissi-labs">GitHub</FlipLink>
      <FlipLink target="_blank" href="https://linkedin.com/in/walid-idrissi-labkhati">Linkedin</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: string;
  href: string;
  target?: string;
}

const FlipLink = ({ children, href, target }: FlipLinkProps) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      // text color is inherited from parent section, so no explicit color here
      className="relative block overflow-hidden whitespace-nowrap text-3xl font-black uppercase sm:text-6xl md:text-7xl lg:text-8xl font-unbounded"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div >
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      {/* Removed text-white dark:text-black so it inherits the color from the parent <a> */}
      <div className="absolute inset-0 text-[#74818C]">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};