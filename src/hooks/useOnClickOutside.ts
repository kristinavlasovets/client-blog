import { RefObject, useEffect } from 'react';

interface UseOnClickOutsideProps {
  ref: RefObject<HTMLDivElement>;
  handler: (e: Event) => void;
}

export const useOnClickOutside = ({ handler, ref }: UseOnClickOutsideProps) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const element = ref?.current;

      if (ref) {
        if (!element || element.contains(event.target as Node)) {
          return;
        }
        handler(event);
      }
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
