import { RefObject, useEffect, useState } from 'react';

// export const useObserver = (ref: RefObject<HTMLDivElement>) => {
//   const [isVisible, setIsVisible] = useState(false);

//   const onIntersection = (entries: IntersectionObserverEntry[]) => {
//     const [entry] = entries;
//     setIsVisible(entry.isIntersecting);
//   };

//   const options = {
//     root: null,
//     rootMargin: '0px',
//   };

//   console.log(ref.current);

//   useEffect(() => {
//     const observer = new IntersectionObserver(onIntersection, options);
//     const { current } = ref;

//     if (current) observer.observe(current);

//     return () => {
//       if (current) observer.unobserve(current);
//     };
//   }, [ref.current, options]);

//   return isVisible;
// };

export function useOnScreen(ref: RefObject<HTMLDivElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  // monitor the interaction
  const observer = new IntersectionObserver(
    ([entry]) => {
      // update the state on interaction change
      setIntersecting(entry.isIntersecting);
    },
    {
      threshold: 1.0,
    }
  );

  useEffect(() => {
    // assign the observer
    if (ref.current) {
      observer.observe(ref.current);
    }

    // remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
