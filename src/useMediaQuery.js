import { useState, useEffect } from 'react';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    // Set initial match state
    setMatches(mediaQueryList.matches);

    // Update state when the media query matches
    const listener = (e) => setMatches(e.matches);

    // Add the listener
    mediaQueryList.addEventListener('change', listener);

    // Clean up listener on component unmount
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}
export default useMediaQuery