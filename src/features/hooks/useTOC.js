import { useEffect, useState } from 'react';

/**
 * Client side tablet of contents
 * @param {import('react').RefObject} refContent
 * @param {import('react').DependencyList} deps
 * */
export default function useToc(refContent, deps = []) {
  const [toc, setToc] = useState();
  // Client side tablet of contents
  useEffect(() => {
    const { current } = refContent;
    if (current) {
      const elements = Array.from(
        current.querySelectorAll('h1, h2, h3, h4, h5, h6'),
      );
      setToc(
        elements.map(
          /** @param {HTMLElement} el */
          (el) => ({
            id: el.id,
            text: el.textContent,
            offsetTop: el.offsetTop,
          }),
        ),
      );
    }
  }, deps);
  return toc;
}
