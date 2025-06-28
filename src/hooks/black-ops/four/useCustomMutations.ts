// --- React ---
import { useState, useCallback, useEffect } from 'react';

export const useCustomMutations = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState('general');
  const [count, setCount] = useState(0);

  // Effect for the initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const generateSettings = useCallback(() => {
    setIsLoading(true);
    setCount((prevCount) => prevCount + 1);
    setKey('general'); // Reset to the first tab

    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return { isLoading, key, setKey, count, generateSettings };
};
