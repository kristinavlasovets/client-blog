import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from 'react';

export const usePopUp = (
  state = false
): [RefObject<HTMLElement>, boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isVisible, setIsVisible] = useState(state);
  const popUpRef = useRef<HTMLDivElement>(null);

  const handleOnClickOutside = (event: Event) => {
    if (popUpRef.current && !popUpRef.current.contains(event.target as Node)) {
      setIsVisible(false);
    }
    if (isVisible) {
      event.stopPropagation();
    }
  };

  useEffect(() => {
    document.body.addEventListener('mousedown', handleOnClickOutside);
    document.body.addEventListener('touchstart', handleOnClickOutside);
    return () => {
      document.body.removeEventListener('mousedown', handleOnClickOutside);
      document.body.removeEventListener('touchstart', handleOnClickOutside);
    };
  }, []);

  return [popUpRef, isVisible, setIsVisible];
};
