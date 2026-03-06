import { useState, useEffect, useRef } from 'react';

/**
 * Hook that returns a ref and a boolean indicating if that ref is in the viewport.
 * It uses IntersectionObserver under the hood.
 */
export default function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.25, ...options }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, inView];
}
