"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Only show custom cursor if device has a fine pointer (mouse)
    if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'input' ||
        target.closest('button') !== null ||
        target.closest('a') !== null;
      setIsHovering(isHoverable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateHoverState);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateHoverState);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999]"
      animate={{
        x: position.x - 8,
        y: position.y - 8,
        backgroundColor: isHovering ? "#E8FF00" : "rgba(232,255,0,0.6)",
        scale: isHovering ? 1.8 : 1,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.12 }}
      style={{
        borderRadius: isHovering ? '3px' : '50%',
        mixBlendMode: 'difference',
      }}
    />
  );
}
