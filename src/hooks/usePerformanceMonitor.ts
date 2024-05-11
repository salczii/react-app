import { useEffect } from 'react';
import { Character } from '../../lib/rick-and-morty-api-client';

const usePerformanceMonitor = (resourceName: string, characters: Character[]) => {
  useEffect(() => {
    const fetchData: Partial<PerformanceResourceTiming> =
      performance.getEntriesByName(resourceName)[0]!;

    if (fetchData) {
      fetch(`${import.meta.env.VITE_AWS_MONITORING_API}`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          loadTimeMs: fetchData.responseEnd,
        }),
      });
    }
  }, [characters, resourceName]);
};

export default usePerformanceMonitor;
