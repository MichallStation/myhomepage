import { useCallback, useEffect, useState } from 'react';

export default function useScroll() {
  const [scrollState, setScrollState] = useState({
    x: null,
    y: null,
    vertical: null,
    horizontal: null,
  });

  const handleDetectScroll = useCallback(() => {
    setScrollState(({ x: oldX, y: oldY }) => {
      const { scrollX, scrollY } = window;
      let vertical = null;
      let horizontal = null;
      if (scrollX !== oldX) {
        if (scrollX > oldX) horizontal = 'right';
        else horizontal = 'left';
      }
      if (scrollY !== oldY) {
        if (scrollY > oldY) vertical = 'down';
        else vertical = 'up';
      }
      return {
        x: scrollX,
        y: scrollY,
        vertical,
        horizontal,
      };
    });
  }, []);

  useEffect(() => {
    // setScrollState({
    //   x: window.scrollX,
    //   y: window.scrollY,
    //   vertical: null,
    //   horizontal: null,
    // });
    window.addEventListener('scroll', handleDetectScroll);
    return () => {
      window.removeEventListener('scroll', handleDetectScroll);
    };
  }, [handleDetectScroll]);
  return scrollState;
}
