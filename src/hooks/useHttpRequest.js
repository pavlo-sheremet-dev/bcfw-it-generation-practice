import { messages } from 'data';
import { useEffect, useState } from 'react';

const isEmptyQueryParams = params => {
  if (!params) return false;
  return Object.keys(params).some(key => !params[key]);
};

export const useHttpRequest = (fetchDataFunction, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isEmptyQueryParams(params)) return;

    const controller = new AbortController();
    (async () => {
      // setData(null);
      setLoading(true);
      setError(null);

      try {
        const response = await fetchDataFunction({
          signal: controller.signal,
          ...params,
        });

        if (response.isCancel) return;

        if (!response.results) return;

        setData(response.results);
      } catch (error) {
        setError(messages[500]);
      } finally {
        setLoading(controller.signal.aborted);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [fetchDataFunction, params]);

  return { data, loading, error };
};
