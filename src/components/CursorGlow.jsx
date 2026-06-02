import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 0.3,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[300px] w-[300px] rounded-full bg-[var(--dusty-pink)]/10 blur-[120px]"
    />
  );
}