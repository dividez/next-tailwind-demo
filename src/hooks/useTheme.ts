'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export function useTheme(defaultTheme: Theme = 'light'): [Theme, (theme: Theme) => void] {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return [theme, setTheme];
}
