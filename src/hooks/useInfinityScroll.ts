import { useEffect, useState } from 'react';

export const useInfinityScroll = (components: JSX.Element[]) => {
  const [displayedComponents, setDisplayedComponents] = useState(components.slice(0, 1));

  const handleScroll = () => {
    const footerHeight = document.getElementById('footer')?.clientHeight!;
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - footerHeight
    ) {
      const nextComponent = components[displayedComponents.length];
      setDisplayedComponents([...displayedComponents, nextComponent]);
    }
  };

  useEffect(() => {
    if (displayedComponents.length !== components.length) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
    return () => {};
  }, [displayedComponents]);

  return displayedComponents;
};
