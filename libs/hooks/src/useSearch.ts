import { useState } from 'react';
import { useDebounce } from 'use-debounce';

export const useSearch = (query?: string) => {
  const [value, setValue] = useState(query || '');
  const [defferdedValue] = useDebounce(value, 1000);

  if (query !== undefined && query !== value) {
    setValue(query);
  }

  return [value, defferdedValue, setValue] as const;
};
