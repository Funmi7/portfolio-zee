// components/AnimatedSection.tsx
import { useEffect, useState, ReactNode } from "react";

import useIntersectionObserver from "@component/utils/hooks";

interface AnimatedSectionProps {
  children: ReactNode;
}

const AnimatedSection = ({ children }: AnimatedSectionProps) => {
  const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (entry && entry.isIntersecting) {
      setIsVisible(true);
    }
  }, [entry]);

  return (
    <div
      ref={ref}
      className={`transition-transform duration-1000 ease-in-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
