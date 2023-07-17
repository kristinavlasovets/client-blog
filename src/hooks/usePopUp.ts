import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from 'react';

export const usePopUp = (
  state = false
): [RefObject<HTMLFormElement>, boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isVisible, setIsVisible] = useState(state);
  const popUpRef = useRef<HTMLFormElement>(null);

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
    return () => {
      document.body.removeEventListener('mousedown', handleOnClickOutside);
    };
  }, []);

  return [popUpRef, isVisible, setIsVisible];
};
