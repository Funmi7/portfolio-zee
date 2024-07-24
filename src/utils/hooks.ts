// hooks/useIntersectionObserver.ts
import { useEffect, useState, MutableRefObject } from "react";

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useIntersectionObserver = (
  options: IntersectionObserverOptions
): [(node: Element | null) => void, IntersectionObserverEntry | undefined] => {
  const [observerEntry, setObserverEntry] =
    useState<IntersectionObserverEntry>();
  const [targetElement, setTargetElement] = useState<Element | null>(null);

  useEffect(() => {
    if (!targetElement) return;

    const observer = new IntersectionObserver((entries) => {
      setObserverEntry(entries[0]);
    }, options);

    observer.observe(targetElement);

    return () => observer.disconnect();
  }, [targetElement, options]);

  return [setTargetElement, observerEntry];
};

export default useIntersectionObserver;
