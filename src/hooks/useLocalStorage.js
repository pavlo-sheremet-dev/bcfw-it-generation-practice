import { useEffect, useState, useRef } from 'react';

export function useLocalStorage(key, initialState = null) {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? initialState
  );

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
