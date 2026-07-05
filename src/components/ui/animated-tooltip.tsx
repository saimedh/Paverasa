"use client";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "../../lib/utils";

export const AnimatedTooltip = ({
  items,
  className,
}: {
  items: {
    id: number | string;
    name: string;
    designation: string;
    initials: string;
    color: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | string | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className={cn("flex flex-row items-center justify-center", className)}>
      {items.map((item) => (
        <div
          className="-mr-4 relative group cursor-pointer"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-50">
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    x: translateX,
                    rotate: rotate,
                  }}
                  className="w-max whitespace-nowrap flex text-xs flex-col items-center justify-center rounded bg-black shadow-md shadow-black/20 px-5 py-2.5"
                >
                  <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                  <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                  <div className="font-bold text-white relative z-30 text-base">
                    {item.name}
                  </div>
                  <div className="text-gray-300 text-xs mt-0.5">
                    {item.designation}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
          <div
            onMouseMove={handleMouseMove}
            className="flex items-center justify-center rounded-full h-14 w-14 border-2 border-white group-hover:scale-105 group-hover:z-30 transition duration-500 shadow-sm relative object-cover !m-0 !p-0"
            style={{
              backgroundColor: `${item.color}20`,
              color: item.color,
              fontSize: '20px',
              fontWeight: '700',
              fontFamily: 'var(--font-heading)'
            }}
          >
            {item.initials}
          </div>
        </div>
      ))}
    </div>
  );
};
