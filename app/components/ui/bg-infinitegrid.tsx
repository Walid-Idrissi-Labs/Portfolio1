import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";
import { 
  motion, 
  useMotionValue, 
  useTransform, 
  useMotionTemplate, 
  useAnimationFrame 
} from "framer-motion";

type InfiniteGridProps = {
  className?: string;
  backgroundOnly?: boolean;
};

export const InfiniteGrid = ({ className, backgroundOnly = false }: InfiniteGridProps) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const updateMouse = (clientX: number, clientY: number) => {
      const container = containerRef.current;
      if (!container) return;
      const { left, top } = container.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    };

    const handlePointerMove = (e: PointerEvent) => {
      updateMouse(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      updateMouse(touch.clientX, touch.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [mouseX, mouseY]);

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.5; 
  const speedY = 0.5;

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + speedX) % 40);
    gridOffsetY.set((currentY + speedY) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-screen flex flex-col items-center justify-center overflow-hidden",
        backgroundOnly ? "bg-black" : "bg-background",
        className
      )}
    >
      <div className={cn("absolute inset-0 z-0", backgroundOnly ? "opacity-[0.1]" : "opacity-[0.05]")}>
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>
      <motion.div 
        className={cn("absolute inset-0 z-0", backgroundOnly ? "opacity-40" : "opacity-40")}
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={cn("absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full blur-[120px]", backgroundOnly ? "bg-beige_bright/18" : "bg-beige_bright/40")} />
        <div className={cn("absolute right-[10%] top-[-10%] w-[20%] h-[20%] rounded-full blur-[100px]", backgroundOnly ? "bg-primary/14" : "bg-primary/30")} />
        <div className={cn("absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full blur-[120px]", backgroundOnly ? "bg-slate/18" : "bg-slate/40")} />
      </div>

      {!backgroundOnly && (
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto space-y-6 pointer-events-none">
         <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            The Infinite Grid
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Move your cursor to reveal the active grid layer. <br/>
            The pattern scrolls infinitely in the background.
          </p>
        </div>
        
        <div className="flex gap-4 pointer-events-auto">
          <button 
              onClick={() => setCount(count + 1)}
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all shadow-md active:scale-95"
          >
              Interact ({count})
          </button>
          <button 
              className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/80 transition-all active:scale-95"
          >
              Learn More
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

const GridPattern = ({ offsetX, offsetY }: { offsetX: any, offsetY: any }) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-muted-foreground" 
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
};