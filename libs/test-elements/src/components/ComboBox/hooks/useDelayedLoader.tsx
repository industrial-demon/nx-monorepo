import { useEffect, useState } from 'react';

export const useDelayedLoad = ({
  loading,
  open,
  delay = 1000,
}: {
  loading?: boolean;
  open: boolean;
  delay?: number;
}) => {
  const [delayedLoad, setDelayedLoad] = useState(false);

  useEffect(() => {
    if (loading) {
      setDelayedLoad(true);
    }

    const timer = setTimeout(() => {
      setDelayedLoad(false);
    }, delay);

    if (!open) {
      setDelayedLoad(false);
      clearInterval(timer);
    }

    return () => {
      timer && clearInterval(timer);
    };
  }, [delay, loading, open]);

  return delayedLoad;
};
