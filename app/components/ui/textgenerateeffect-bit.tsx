"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate , useInView } from "motion/react";
import { cn } from "../../lib/utils";
import tailwindConfig from "../../../tailwind.config.js";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1.4,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView( scope , {once : true })
  let wordsArray = words.split(" ");
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.18),
        }
      );
    }
  }, [isInView]);

  // Enhanced: support multi-word italics using * markers
  const parseWordsWithItalics = (text: string) => {
    const result: { text: string; italic: boolean }[] = [];
    let buffer = "";
    let italic = false;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "*") {
        if (buffer) {
          result.push({ text: buffer, italic });
          buffer = "";
        }
        italic = !italic;
      } else {
        buffer += text[i];
      }
    }
    if (buffer) {
      result.push({ text: buffer, italic });
    }
    return result;
  };

  const renderWords = () => {
    const parsed = parseWordsWithItalics(words);
    // Split each chunk into words, preserving italics
    let idx = 0;
    return (
      <motion.div ref={scope}>
        {parsed.flatMap((chunk, chunkIdx) => {
          const wordList = chunk.text.split(/(\s+)/); // keep spaces
          return wordList.map((word, wordIdx) => {
            if (word === "") return null;
            // Use idx for unique key
            return (
              <motion.span
                key={"w" + idx++}
                className={
                  " text-[#e6e6e6] opacity-0" +
                  (chunk.italic && word.trim() ? " italic" : "")
                }
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}
              </motion.span>
            );
          });
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-40">
        <div className="  text-white text-2xl  md:text-[1.9] lg:text-[1.8rem] xl:text-[2.2rem] text-center font-unbounded font-light tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
